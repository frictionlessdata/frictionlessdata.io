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

// url = url to datapackage.json or the root directory in which it is contained
exports.normalize = function(datapackage, url) {
  var base = url.replace(/datapackage.json$/g, '');
  // ensure certain fields exist
  if (!'description' in datapackage) {
    datapackage.description  = '';
  }
  // set description as first paragraph of readme if we no description
  if (!datapackage.description && 'readme' in datapackage) {
    // first extract plain text ...
    // TODO: reinstate this
    // html = markdown(unicode(datapackage['readme'], 'utf8'))
    // plain = strip_tags(html).split('\n\n')[0].replace(' \n', '').replace('\n', ' ')
    // datapackage['description'] = plain.encode('utf8')
    datapackage.description = datapackage.readme.split('\n\n')[0]
  } else if (!datapackage.readme) {
    datapackage.readme = datapackage.description;
  }

  datapackage.readme_html = marked(datapackage.readme);

  datapackage.resources.forEach(function(info) {
    if (!info.url && info.path) {
      info.url = base + info.path;
    }
  });

  return datapackage;
}

