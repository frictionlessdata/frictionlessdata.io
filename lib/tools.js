var JSV = require("JSV").JSV
  , url = require('url')
  , request = require('request')  
  , marked = require('marked')
  , csv = require('csv')
  ;


var dpSchema = {
  "title": "Data Package",
  "type" : "object",
  "properties": {
    name: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string'
    },
    sources: {
      type: 'array'
    },
    licenses: {
      type: 'array'
    },
    resources: {
      type: 'array',
      required: true
    } 
  }
};

// Validate the provided Data Package JSON
exports.validate= function(raw) {
  var env = JSV.createEnvironment();
  try {
    var json = JSON.parse(raw);
  } catch(e) {
    return { valid: false, errors: [{message: 'Invalid JSON'}]};
  }
  var required = [ 'name', 'resources' ];
  var recommended = [
    'title',
    'licenses',
    'datapackage_version',
    'description',
    'sources',
    'keywords'
  ];
  var report = env.validate(json, dpSchema);
  var errors = report.errors;
  if (errors.length === 0) {
    return {
      valid: true,
      errors: []
    };
  } else {
    return {
      valid: false,
      errors: errors
    };
  }
}

exports.validateUrl = function(dpurl, callback) {
  request(dpurl, function(err, response, body) {
    if (err) {
      callback({
        valid: false,
        errors: [{
          message: err.toString()
        }]
      });
    }
    else if (response.statusCode !== 200) {
      callback({
        valid: false,
        errors: [{
          message: 'Error loading the datapackage.json file. HTTP Error code: ' + response.statusCode
        }]
      });
    } else {
      callback(exports.validate(body));
    }
  });
}

// Load and normalize a datapackage.json
// Normalize means converting relative paths to absolute paths
exports.load = function(datapackage_url, cb) {
  var base = datapackage_url.replace(/datapackage.json$/g, '');
  request(datapackage_url, function(error, response, body) {
    if (error) {
      cb(error);
      return;
    } else if (response.statusCode != 200) {
      cb({message: 'Unable to access file. Status code: ' + response.statusCode});
      return;
    }
    // TODO: handle bad JSON
    try {
      var datapackage = JSON.parse(body);
    } catch(e) {
      cb({message: 'datapackage.json is invalid JSON. Details: ' + e.message});
      return;
    }

    // now dig up and use README if it exists
    var readme_url = base + 'README.md'
    request(readme_url, function(err, resp, body) {
      if (!err) {
        datapackage['readme'] = body.replace(/\r\n/g, '\n');
      }
      datapackage = exports.normalize(datapackage, base);
      cb(null, datapackage); 
    });
  });
};

exports.normalizeDataPackageUrl = function(url) {
  var ghNotRaw = 'https://github.com';
  if (url.indexOf(ghNotRaw) != -1 && url.indexOf('datapackage.json') == -1) {
    url = url.replace(ghNotRaw, 'https://raw.github.com') + '/datapackage.json';
  }
};

// Normalize a DataPackage DataPackage.json in various ways
// 
// @param datapackage: datapackage object (already parsed from JSON)
// @param url: url to datapackage.json or the root directory in which it is contained
exports.normalize = function(datapackage, url_) {
  var base = url_ ? url_.replace(/datapackage.json$/g, '') : '';
  // ensure certain fields exist
  if (! ('description' in datapackage)) {
    datapackage.description  = '';
  }
  // set description as first paragraph of readme if no description
  if (!datapackage.description && 'readme' in datapackage) {
    var html = marked(datapackage.readme);
    html = html.replace(/<p>/g, '\n<p>');
    var plain = stripTags(html).split('\n\n')[0].replace(' \n', '').replace('\n', ' ').replace(/^ /, '');
    datapackage.description = plain;
  } else if (!datapackage.readme) {
    datapackage.readme = datapackage.description;
  }

  datapackage.readme_html = marked(datapackage.readme);

  datapackage.resources.forEach(function(info) {
    if (!info.url && info.path) {
      info.url = base + info.path;
    }
    if (!info.name) {
      info.name = _nameFromUrl(info.url);
    }
  });

  // have a stab at setting a sensible homepage
  if (!('homepage' in datapackage)) {
    if (base.indexOf('raw.github.com') != -1) {
      var offset = base.split('/').slice(3,5).join('/');
      datapackage.homepage = 'https://github.com/' + offset;
    } else {
      datapackage.homepage = base;
    }
  }

  return datapackage;
}

// Create a DataPackage.json
//
// @param info: a hash containing data to use for datapackage info
//    most importantly it can contain a url or resource.url pointing
//    to a data file (CSV). This file will be analyzed and used to
//    create the resource entry in the datapackage.json.
exports.create = function(info, cb) {
  if (info === null) {
    info = {};
  }
  var out = {};
  out.name = info.name || ''; 
  out.title = info.title || '';
  out.description = info.description || '';
  if (!info.licenses) {
    out.licenses = [{
        'id': 'odc-pddl',
        'name': 'Public Domain Dedication and License',
        'version': '1.0',
        'url': 'http://opendatacommons.org/licenses/pddl/1.0/'
    }];
  }
  if (!out.resources) {
    out.resources = [];
    if ('url' in info || 'resource.url' in info) {
      var resurl = info.url || info['resource.url'];
      var name = _nameFromUrl(resurl);
      var tmp = {
        name: name,
        url: resurl,
        format: 'csv',
        mediatype: 'text/csv'
      };
      var stream = request(resurl);
      stream.on('response', function(resp) {
        if (resp.statusCode != 200) {
          var err = {
            message: 'Got error code ' + resp.statusCode + ' while attempting to access ' + resurl
          }
          cb(err, out);
        } else {
          exports.createJsonTableSchema(stream, function(error, schema) {
            tmp.schema = schema;
            out.resources.push(tmp);
            cb(null, out);
          });
        }
      });
      return;
    }
  }
  cb(null, out);
}

// Create a (JSON Table) Schema for CSV data in input stream
exports.createJsonTableSchema = function(stream, cb) {
  var out = {};
  var parser = csv();
  parser.from(stream)
    // note somewhat HACKy approach to only processing the first bit of the file
    .transform(
      function(data, idx, callback) {
        if (idx==0) {
          out.fields = data.map(function(field) {
            // field.type = field.type in jtsmap ? jtsmap[field.type] : field.type;
            return {
              id: field,
              description: '',
              type: 'string'
            }
          });
          cb(null, out);
          throw new Error('Stop parsing');
        }
      },
      {parallel: 1}
    )
    .on('error', function(err) {
      parser.pause();
      // do these for good measure ...
      stream.pause();
      stream.destroy();
      // now rethrow the error
      if (err.message != 'Stop parsing') {
        throw err
      }
    })
    ;
}


// ========================================================
// Utilities

// Create a name from a URL (no extension)
// e.g. http://.../abc/xyz.fbc.csv?... => xyz.fbc
function _nameFromUrl(url_) {
  var name = url.parse(url_).pathname.split('/').pop();
  if (name.indexOf('.') != -1) {
    var _parts = name.split('.');
    _parts.pop();
    name = _parts.join('.');
  }
  return name;
}

var stripTags = function(str){
  if (str == null) return '';
  return String(str).replace(/<\/?[^>]+>/g, '');
}


