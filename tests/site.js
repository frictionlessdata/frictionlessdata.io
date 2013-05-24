var request = require('supertest')
  , express = require('express')
  , assert = require('assert')
  ;

var app = require('../app.js').app;

describe('GET /tools/dp/create.json', function(){
  it('respond with json', function(done){
    request(app)
      .get('/tools/dp/create.json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

describe('GET /tools/creator', function(){
  it('responds with correct json', function(done){
    var gpurl = 'https://raw.github.com/datasets/gold-prices/master/data/data.csv';
    var url = '/tools/dp/create.json?resource.url=' + gpurl;
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

describe('GET /tools/dp/validate', function(){
  it('responds with correct json', function(done){
    var url = '/tools/dp/validate.json';
    url += '?url=' + 'https://raw.github.com/datasets/gold-prices/master/datapackage.json';
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);

        var out = res.body;
        assert.equal(out.length, 0);
        done();
      });
  })
  it('fails with 500', function(done){
    var url = '/tools/dp/validate.json';
    url += '?url=' + 'http://localhost:9999';
    request(app)
      .get(url)
      .expect('Error: connect ECONNREFUSED')
      .expect(500, done)
    ;
  })
})

