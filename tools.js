var JSV = require("JSV").JSV;

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

