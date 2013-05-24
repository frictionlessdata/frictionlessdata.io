var assert = require('assert')
  tools = require('../tools.js')
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

