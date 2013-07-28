var assert = require('assert')
  tools = require('../lib/tools.js')
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
  "readme": "Abc\n\nXyz",
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
var sourceUrl = 'https://raw.github.com/datasets/gold-prices/master/datapackage.json'; 
var sourceUrlBase = 'https://raw.github.com/datasets/gold-prices/master/'; 

describe('normalize', function() {
  it('works in basic case', function() {
    dpout = tools.normalize(dpin, sourceUrl);
    assert.equal(dpout.resources[0].url, sourceUrlBase + 'data/data.csv');
    assert.equal(dpout.description, 'Abc');
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

