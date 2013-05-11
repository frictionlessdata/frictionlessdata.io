var request = require('supertest')
  , express = require('express')
  , assert = require('assert')
  ;

var app = require('../app.js').app;

describe('GET /tools/creator', function(){
  it('respond with json', function(done){
    request(app)
      .get('/tools/creator.json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

describe('GET /tools/creator', function(){
  it('responds with correct json', function(done){
    var gpurl = 'https://raw.github.com/datasets/gold-prices/master/data/data.csv';
    var url = '/tools/creator.json?resource.url=' + gpurl;
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);

        var out = res.body;
        assert.equal(out.licenses[0].id, 'odc-pddl');
        assert.equal(out.name, '');

        var res = out.resources[0];
        assert.equal(out.resources[0].url, gpurl);
        assert.equal(res.schema.fields[0].type, 'date');
        assert.equal(res.schema.fields[1].type, 'number');
        done();
      });
  })
})
