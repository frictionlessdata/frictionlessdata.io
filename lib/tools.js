var JSV = require("JSV").JSV
  , request = require('request')  
  , marked = require('marked')
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

exports.dpValidate= function(raw) {
  var env = JSV.createEnvironment();
  try {
    var json = JSON.parse(raw);
  } catch(e) {
    return [ { message: 'Invalid JSON' } ];
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
  return report.errors;
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

// url = url to datapackage.json or the root directory in which it is contained
exports.normalize = function(datapackage, url) {
  var base = url.replace(/datapackage.json$/g, '');
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

var stripTags = function(str){
  if (str == null) return '';
  return String(str).replace(/<\/?[^>]+>/g, '');
}

