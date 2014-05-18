var express = require('express')
  , path = require('path')
  , nunjucks = require('nunjucks')
  , routes = require('./routes')
  ;

var app = express();

//CORS middleware
var CORSSupport = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  // app.set('view engine', 'html');
  // app.engine('html', require('hbs').__express);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(CORSSupport);
  app.use(express.static(path.join(__dirname, 'public')));
});

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views'));
env.express(app);

// middleware to add trailing slash
app.use(function(req, res, next) {
  if(req.url.substr(-1) === '/' && req.url.length > 1) {
    res.redirect(301, req.url.slice(0, req.url.length-1));
  }
  else {
    next();
  }
});


app.get('/', routes.home);
app.get('/about/contribute', function(req, res) {
  res.redirect('/contribute');
});
app.get('/contribute', routes.contribute);
app.get('/publish', routes.publish);
app.get('/roadmap', routes.roadmap);
app.get('/roadmap/core-datasets', function(req, res) {
  res.render('core-datasets.html', {title: 'Core Datasets'});
});
app.get('/vision', function(req, res) {
  routes.renderMarkdown('doc/vision.md', 'A Frictionless Data Ecosystem', res);
});
// Standards and patterns
app.get('/standards', routes.standards);
app.get('/standards/data-package', redirect('/doc/data-package'));
app.get('/standards/simple-data-format', redirect('/doc/tabular-data-package'));
app.get('/standards/csv', redirect('/doc/csv'));
// Docs (patterns, standards etc)
app.get('/doc', routes.doc);
app.get('/doc/:page', routes.doc);
// Tools
app.get('/tools', routes.tools);
app.get('/tools/create.json', routes.toolsDpCreateJSON);
app.get('/tools/create', routes.toolsDpCreate);
app.get('/tools/validate.json', routes.toolsDpValidateJSON);
app.get('/tools/validate', routes.toolsDpValidate);
app.get('/tools/view', routes.toolsDpView);
app.get('/tools/dataproxy', routes.toolsDataProxy);
// Data
app.get('/data', routes.data);
app.get('/data.json', routes.dataJson);
app.get('/data/search', routes.dataSearch);
app.get('/data/:owner/:id/datapackage.json', routes.dataShowJSON);
app.get('/data/:owner/:id/r/:name.csv', routes.dataShowCSV);
app.get('/data/:owner/:id', routes.dataShow);
// Community
app.get('/community/:username/:repo', function(req, res) {
  var url = '/data/' + req.params.username + '/' + req.params.repo;
  res.redirect(url);
});

function redirect(url) {
  return function(req, res) {
    res.redirect(url);
  }
}

var CATALOG_URL_DEFAULT = 'http://raw.github.com/datasets/registry/master/github-list.txt';
var CORE_CATALOG_DEFAULT = 'http://raw.github.com/datasets/registry/master/datapackage-list.txt';
var url = process.env.CATALOG_URL|| CATALOG_URL_DEFAULT;
var coreUrl = process.env.CORE_CATALOG_URL || CORE_CATALOG_DEFAULT;

routes.catalog.loadUrl(url, coreUrl, function(err) {
  if (err) {
    console.error('Failed to load dataset info');
  }
  app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
  });
});

exports.app = app;

