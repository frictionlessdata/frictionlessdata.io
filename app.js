var express = require('express')
  , path = require('path')
  , fs = require('fs')
  , nunjucks = require('nunjucks')
  , request = require('request')
  , tools = require('./tools.js')
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
  app.set('views', __dirname + '/templates');
  // app.set('view engine', 'html');
  // app.engine('html', require('hbs').__express);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(CORSSupport);
  app.use(express.static(path.join(__dirname, 'public')));
});

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('templates'));
env.express(app);

app.get('/', function(req, res) {
  res.render('index.html', {
  });
})

app.get('/about', function(req, res) {
  res.render('about.html', {});
});

app.get('/about/contribute', function(req, res) {
  res.render('contribute.html', {});
});

app.get('/standards', function(req, res) {
  res.render('/standards/index.html', {});
});

app.get('/tools', function(req, res) {
  res.render('/tools/index.html', {});
});

// /tools/creator.json?name=abc&title=
app.get('/tools/dp/create.json', function(req, res) {
  var out = {};
  out.name = req.query.name || ''; 
  out.title = req.query.title || '';
  out.description = req.query.description || '';
  out.licenses = [{
      'id': 'odc-pddl',
      'name': 'Public Domain Dedication and License',
      'version': '1.0',
      'url': 'http://opendatacommons.org/licenses/pddl/1.0/'
  }];
  out.resources = [];
  if ('resource.url' in req.query) {
    var resurl = req.query['resource.url'];
    var tmp = {
      url: resurl
    }
    out.resources.push(tmp);
    var infourl = 'http://jsonpdataproxy.appspot.com/?url=' + resurl + '&max-results=5&guess-types=1&format=json';
    request(infourl, function(err, response, body) {
      if (err) {
        res.json(500, {error: 'failed to load info on url ' + url});
      } else {
        var info = JSON.parse(body);
        if (info.error) {
          res.json(500, info);
          return
        }
        var jtsmap = {
          'Decimal': 'number',
          'DateTime': 'date',
          'String': 'string'
        }
        var fields = info.metadata.fields.map(function(field) {
          field.type = field.type in jtsmap ? jtsmap[field.type] : field.type;
          return field;
        });
        out.resources[0].schema = {
          fields: info.metadata.fields
        };
        res.json(out);
      }
    });
  } else {
    res.json(out);
  }
});

app.get('/tools/dp/create', function(req, res) {
  res.render('tools/dp/create.html');
});

app.get('/tools/dp/validate.json', function(req, res) {
  request(req.query.url, function(err, response, body) {
    if (err) {
      res.send(500, err.toString());
    } else {
      var out = tools.dpValidate(body);
      res.json(out);
    }
  });
});

app.get('/data', function(req, res) {
  datasets = catalog.query();
  total = datasets.length;
  res.render('data/index.html', {
    total: total,
    datasets: datasets
  });
})

app.get('/data/search', function(req, res) {
  q = req.query.q || '';
  // datasets = catalog.query(q)
  datasets = [];
  total = datasets.length;
  res.render('data/search.html', {q: q, datasets: datasets, total: total});
});

app.get('/data/:id/datapackage.json', function(req, res) {
  var id = req.params.id;
  var dataset = catalog.get(id)
  if (!dataset) {
    res.send(404, 'Not Found');
  }
  res.json(dataset);
});

app.get('/data/:id.csv', function(req, res) {
  var id = req.params.id;
  var dataset = catalog.get(id)
  if (!dataset || !dataset.resources.length > 0) {
    res.send(404, 'Not Found');
  }
  var url = dataset.resources[0].url;
  request.get(url).pipe(res);
});

app.get('/data/:id', function(req, res) {
  var id = req.params.id;
  var dataset = catalog.get(id)
  if (!dataset) {
    res.send(404, 'Not Found');
  }
  if (dataset.resources && dataset.resources.length > 0) {
    // Get the primary resource for use in JS
    // deep copy and then "fix" in various ways
    var resource = JSON.parse(JSON.stringify(dataset.resources[0]));
    resource.dataset_name = dataset.id;
    resource.url = '/data/' + id + '.csv';
    resource.backend = 'csv';
    resource.fields = resource.schema.fields;
  }
  var dataViews = dataset.views || [];
  res.render('data/dataset.html', {
    dataset: dataset,
    raw_data_file: JSON.stringify(resource),
    dataViews: JSON.stringify(dataViews)
  });
});

var model = require('./model.js');
var CATALOG_URL_DEFAULT = 'http://raw.github.com/datasets/registry/master/index.json';
var url = process.env.CATALOG_URL|| CATALOG_URL_DEFAULT;
var catalog = new model.Catalog();

catalog.loadURL(url, function(err) {
  if (err) {
    console.error('Failed to load dataset info');
  }
  app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
  });
});

exports.app = app;

