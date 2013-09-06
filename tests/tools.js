var assert = require('assert')
  , fs = require('fs')
  , tools = require('../lib/tools.js')
  ;

describe('validate', function() {
  it('bad JSON', function() {
    var out = tools.dpValidate('{"xyz"');
    assert.equal(out.length, 1);
    assert.equal(out[0].message, 'Invalid JSON');
  });
  it('invalid for schema', function() {
    var out = tools.dpValidate('"xyz"');
    assert.equal(out.length, 1);
    assert.equal(out[0].message, 'Instance is not a required type');
  });
  it('works', function() {
    var data = {
      "name": "abc",
      "resources": []
    };
    var out = tools.dpValidate(JSON.stringify(data));
    assert.equal(out.length, 0);
  });
});


var dpin = {
  "name": "gold-prices",
  "readme": "Abc *em*\n\nXyz",
  "resources": [
    {
      "path": "data/data.csv",
      "format": "csv",
      "schema": {
        "fields": [
          {
            "type": "date",
            "id": "date"
          },
          {
            "type": "number",
            "id": "price"
          }
        ]
      }
    }
  ]
};
var dpin2 = JSON.parse(JSON.stringify(dpin));
dpin2.readme = 'Abc *em*\nzzz\n\nXYZ';
var sourceUrl = 'https://raw.github.com/datasets/gold-prices/master/datapackage.json'; 
var sourceUrlBase = 'https://raw.github.com/datasets/gold-prices/master/'; 

describe('normalize', function() {
  it('works in basic case', function() {
    dpout = tools.normalize(dpin, sourceUrl);
    assert.equal(dpout.resources[0].url, sourceUrlBase + 'data/data.csv');
    assert.equal(dpout.description, 'Abc em');
    assert.equal(dpout.homepage, 'https://github.com/datasets/gold-prices');
  });
  it('checking description', function() {
    dpout = tools.normalize(dpin2, sourceUrl);
    assert.equal(dpout.description, 'Abc em\nzzz');
  });
  it('sets names for resources', function() {
    dpout = tools.normalize(dpin, sourceUrl);
    assert.equal(dpout.resources[0].name, 'data');
  });
});

describe('load', function() {
  it('works in basic case', function(done) {
    tools.load(sourceUrl, function(err, dpout) {
      assert(err === null);
      assert.equal(dpout.resources[0].url, sourceUrlBase + 'data/data.csv');
      assert(dpout.readme.length > 50);
      assert(dpout.description.length <  150);
      done();
    });
  });

  it('works with 404', function(done) {
    var badUrl = 'https://raw.github.com/datasets/gold-prices/master/xyz.txt';
    tools.load(badUrl, function(err, dpout) {
      assert(err!=null);
      done();
    });
  });

  it('works with bad data', function(done) {
    var csvurl = 'https://raw.github.com/datasets/gold-prices/master/README.md'; 
    dpout = tools.load(csvurl, function(err, dpout) {
      assert.equal(err.message.indexOf('datapackage.json is invalid JSON'), 0);
      done();
    });
  });
});

describe('create', function() {
  it('works with basics', function(done) {
    tools.create({}, function(error, out) {
      assert('name' in out, 'name not in output');
      assert('title' in out, 'name not in output');
      assert.deepEqual(out.licenses[0], {
        'id': 'odc-pddl',
        'name': 'Public Domain Dedication and License',
        'version': '1.0',
        'url': 'http://opendatacommons.org/licenses/pddl/1.0/'
      });
      assert.deepEqual(out.resources, []);
      done();
    });
  });
  it('resources from url are ok', function(done) {
    var url = 'https://raw.github.com/datasets/s-and-p-500-companies/master/data/constituents-financials.csv';
    tools.create({url: url}, function(error, out) {
      assert(error === null);
      assert(out.resources.length, 1);
      var res = out.resources[0];
      var schema = res.schema;
      delete res.schema;
      assert.deepEqual(res, {
        url: url,
        name: 'constituents-financials',
        format: 'csv',
        mediatype: 'text/csv',
      });
      assert.equal(schema.fields.length, 15);
      done();
    });
  });
  it('works with a bad resource url', function(done) {
    var url = 'https://raw.github.com/datasets/s-and-p-500-companies/master/data/constituents-financials.csv' + '-bad-url';
    tools.create({url: url}, function(error, out) {
      assert(error);
      done();
    });
  });
});

describe('createJsonTableSchema', function() {
  it('works', function(done) {
    var stream = fs.createReadStream('tests/data/test.csv');
    tools.createJsonTableSchema(stream, function(error, out) {
      assert.deepEqual(out, {
        fields: [
          {
            id: 'A',
            description: '',
            type: 'string'
          },
          {
            id: 'B',
            description: '',
            type: 'string'
          }
        ]
      });
      done();
    });
  });
});
