var request = require('supertest')
  , express = require('express')
  , assert = require('assert')
  ;

var app = require('../app.js').app;

describe('GET /tools/create.json', function(){
  it('respond with json', function(done){
    request(app)
      .get('/tools/create.json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
  it('responds with correct json', function(done){
    var gpurl = 'https://raw.github.com/datasets/gold-prices/master/data/data.csv';
    var url = '/tools/create.json?resource.url=' + gpurl;
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
        // assert.equal(res.schema.fields[0].type, 'date');
        // assert.equal(res.schema.fields[1].type, 'number');
        assert.equal(res.schema.fields[0].type, 'string');
        assert.equal(res.schema.fields[1].type, 'string');
        done();
      });
  })
})

describe('GET /tools/validate', function(){
  it('responds with correct json', function(done){
    var url = '/tools/validate.json';
    url += '?url=' + 'https://raw.github.com/datasets/gold-prices/master/datapackage.json';
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);

        var out = res.body;
        assert.deepEqual(out, {valid: true});
        done();
      });
  })
  it('fails with 500', function(done){
    var url = '/tools/validate.json';
    url += '?url=' + 'http://localhost:9999';
    request(app)
      .get(url)
      .expect('Error: connect ECONNREFUSED')
      .expect(500, done)
    ;
  })
})


describe('GET /tools/view', function(){
  it('responds with correct info', function(done){
    var url = '/tools/view';
    url += '?url=' + 'https://raw.github.com/datasets/gold-prices/master/datapackage.json';
    request(app)
      .get(url)
      .end(function(err, res) {
        if (err) done(err);

        var out = res.body;
        console.log(out);
        // assert.equal(out.length, 0);
        done();
      });
  })
  it('fails with 500 on bad input url', function(done){
    var url = '/tools/view';
    url += '?url=' + 'http://localhost:9999';
    request(app)
      .get(url)
      .expect('<p>There was an error.</p>\n\nconnect ECONNREFUSED')
      .expect(200, done)
    ;
  })
})

