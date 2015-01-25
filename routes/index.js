var fs = require('fs')
  , request = require('request')
  , marked = require('marked')
  , csv = require('csv')
  , parse = require('csv-parse')
  , transform = require('stream-transform')
  , underscore = require('underscore')

  , config = require('../lib/config')
  , tools = require('datapackage')
  , model = require('../lib/model.js')
  , spec = require('datapackage-identifier')
  , validate  = require('datapackage-validate')

  , licenses = require('../data/licenses')
  ;

var catalog = new model.Catalog();
exports.catalog = catalog;

// ========================================================
// Boot
// ========================================================

exports.bootApp = function(cb) {
  // allow for booting without any data packages
  if (!config.CATALOG_LIST) {
    console.warn('Booting without any data packages loaded.');
    cb();
    return;
  }

  catalog.loadUrl(config.CATALOG_LIST, config.CORE_CATALOG_LIST, function(err) {
    if (err) {
      console.error('Failed to load dataset info');
    }
    cb(err);
  });
}

// ========================================================
// Core content
// ========================================================

exports.home = function(req, res) {
  res.render('index.html', {
    title: 'Home'
  });
};

exports.contribute = function(req, res) {
  res.render('contribute.html', {});
};

// crude cache
var _roadmapData = null;

exports.roadmap = function(req, res) {
  var roadmapSheet = 'https://docs.google.com/spreadsheet/pub?key=0AqR8dXc6Ji4JdFJlMkZKbDRZT2RWWG9RV0wtcWo2c2c&single=true&gid=0&output=csv';
  
  if (_roadmapData === null) {
    var stream = request(roadmapSheet);
    csv()
      .from.stream(stream)
      .to.array(function(data, count) {
        var headers = data[0];
        _roadmapData = data.slice(1).map(function(row) {
          var out = underscore.object(headers, row);
          out.Description = marked(out.Description);
          out.slug = out.Title.toLowerCase().replace(/ /g, '-');
          return out;
        });
        doRender()
      })
    ;
  } else {
    doRender();
  }

  function doRender() {
    var streams = [
      {
        title: 'Standards'
      },
      {
        title: 'Core Tools'
      },
      {
        title: 'Integration'
      },
      {
        title: 'Outreach'
      },
      {
        title: 'Extras'
      }
    ];
    function filterByStream(stream) {
      return _roadmapData.filter(function(row) {
        return row.Stream === stream;
      });
    }
    
    streams.forEach(function(stream) {
      stream.items = filterByStream(stream.title);
    });
    console.log(streams[0].items[0]);
    res.render('roadmap.html', {
      title: 'Roadmap',
      roadmap: _roadmapData,
      streams: streams
    });
  }
};

exports.standards = function(req, res) {
  res.render('/standards/index.html', {title: 'Standards'});
};

exports.doc = function(req, res) {
  var page = req.params.page || 'index';
  var filepath = 'doc/' + page + '.md'
  if (!fs.existsSync(filepath)) {
    res.send(404);
    return;
  }
  fs.readFile(filepath, 'utf8', function(err, text) {
    var lines  = text.split('\n')
    var title = '';
    if (lines[0].indexOf('#') === 0) {
      title = lines[0].replace(/#+\s+/g, '');
      text  = lines.slice(1).join('\n');
    }
    var content = marked(text);
    var githubPath = '//github.com/okfn/data.okfn.org/blob/master/' + filepath;
    res.render('doc.html', {
      title: title,
      content: content,
      githubPath: githubPath
    });
  });
};

// ========================================================
// Tools
// ========================================================

exports.tools = function(req, res) {
  res.render('/tools/index.html', {});
};

exports.toolsDpCreate = function(req, res) {
  res.render('tools/dp/create.html', {
    licenses: licenses
  });
};

exports.toolsDpValidateJSON = function(req, res) {
  // handle base urls as well as full urls
  var dpurl = spec.parse(req.query.url).dataPackageJsonUrl;
  validate.validateUrl(dpurl, function(data) {
    res.json(data);
  });
};

exports.toolsDpValidate = function(req, res) {
  var url = spec.parse(req.query.url).dataPackageJsonUrl;
  if (!url) {
    res.render('tools/dp/validate.html');
  } else {
    validate.validateUrl(url, function(data) {
      res.render('tools/dp/validate.html', {
        url: url,
        result: data,
        errorsAsJson: JSON.stringify(data.errors, null, 2)
      });
    });
  }
};

exports.toolsDpView = function(req, res) {
  var url = req.query.url;
  if (!url) {
    res.render('tools/dp/view.html');
  } else {
    tools.load(url, function(err, dpkg) {
      if (err) {
        res.send('<p>There was an error.</p>\n\n' + err.message);
        return;
      }

      dpkg.resources.forEach(function(resource, idx) {
        // set special local url for use in javascript
        resource.localurl = '/tools/dataproxy/?url=' + encodeURIComponent(resource.url);
      });
      var dataViews = dpkg.views || [];
      res.render('tools/dp/view.html', {
        dataset: dpkg,
        jsonDataPackage: JSON.stringify(dpkg),
        dataViews: JSON.stringify(dataViews),
        url: url
      });
    });
  }
};

// proxy data
exports.toolsDataProxy = function(req, res) {
  var url = req.query.url;
  request.get(url).pipe(res);
}

// ========================================================
// Data section
// ========================================================

exports.data = function(req, res) {
  datasets = catalog.query().filter(function(dp) {
    return !dp.isCore;
  });
  coreDatasets = catalog.byOwner('core');
  total = datasets.length;
  res.render('data/index.html', {
    total: total,
    datasets: datasets,
    coreDatasets: coreDatasets
  });
};

exports.dataJson = function(req, res) {
  datasets = catalog.query();
  total = datasets.length;
  res.json({
    total: total,
    datasets: datasets
  });
};

exports.dataSearch = function(req, res) {
  q = req.query.q || '';
  // datasets = catalog.query(q)
  datasets = [];
  total = datasets.length;
  res.render('data/search.html', {q: q, datasets: datasets, total: total});
};

exports.dataPackageShowJSON = function(req, res) {
  var id = req.params.id;
  var dataset = catalog.get(req.params.owner, id)
  if (!dataset) {
    res.send(404, 'Not Found');
  }
  res.json(dataset);
};

// we support paths like
// /{dataset-id}/r/{name}[(empty)|.csv|.json|.html]
// where name is either resource name or index of the resource
exports.dataShow = function(req, res) {
  var id = req.params.id
    , resourceFullName = req.params.name
    , nameParts = resourceFullName.split('.')
    , extension = nameParts.length > 1 ? nameParts.pop() : ''
    , resourceName = nameParts.join('.')
    // TODO: rather than defaulting to 0, let's 404 if we don't match
    , resourceIndex = 0
    ;

  // can have '.' in resource name so have to be careful we did take part of name as extension
  if (['', 'csv', 'json', 'html'].indexOf(extension) == -1) {
    extension = '';
    resourceName += '.' + extension;
  }

  // identify the resource index
  var dataset = catalog.get(req.params.owner, id)
  if (!dataset || !dataset.resources.length > 0) {
    res.send(404, 'Not Found');
  }
  if (resourceName.match('^\d+$')) {
    resourceIndex = parseInt(resourceName)
  } else {
    dataset.resources.forEach(function(res, idx) {
      if (res.name === resourceName) {
        resourceIndex = idx;
      }
    });
  }
  var url = dataset.resources[resourceIndex].url;

  if (extension == '') {
    res.set('Content-Type', 'text/plain');
    request.get(url).pipe(res);
  }
  else if (extension == 'csv') { // TODO: we are assuming the resource is csv here - what if it isn't ...
    res.set('Content-Type', 'text/plain');
    request.get(url).pipe(res);
  } else if (extension == 'json') {
    // TODO: use any csv dialect description info in the data package to parse

    // problem is we need to add ',' between records and '[' at start and ']' at end
    // got everything done but the ']' at the end
//    res.set('Content-Type', 'application/json; charset=utf-8');
//    var parser = parse({columns: true});
//    var count = -1;
//    var transformer = transform(function(data) {
//      count++;
//      var out = JSON.stringify(data);
//      if (count != 0) out = ',\n' + out;
//      return out;
//    });
//    // transformer.on('finish', 
//    res.write('[\n');
//    parser.on('finish', function() {
//      // res.send(']');
//    });
//    request.get(url).pipe(parser).pipe(transformer).pipe(res);

    // non-streaming option :-(
    var parser = parse({columns: true}, function(err, rows) {
      res.json(rows);
    });
    request.get(url).pipe(parser);
  } else if (extension == 'html') {
    res.send('TODO');
  } else {
    res.send(404, 'Not Found');
  }
};

exports.dataPackageShow = function(req, res) {
  var id = req.params.id
    , owner = req.params.owner
    ;
  var dataset = catalog.get(req.params.owner, id)
  if (!dataset) {
    res.send(404, 'Not Found');
    return;
  }
  // deep copy
  dataset = JSON.parse(JSON.stringify(dataset));
  dataset.resources.forEach(function(resource, idx) {
    // set special local url for use in javascript
    var resourceName = resource.name || idx;
    resource.localurl = '/data/' + owner + '/' + id + '/r/' + resourceName + '.csv';
  });
  var dataViews = dataset.views || [];
  res.render('data/dataset.html', {
    dataset: dataset,
    showDataApi: true,
    jsonDataPackage: JSON.stringify(dataset),
    dataViews: JSON.stringify(dataViews)
  });
};

// ========================================================
// Community Data
// ========================================================

exports.communityUser = function(req, res) {
  var username = req.params.owner;

  // sort of hacky here for backwards compatability
  // we used to have url structure /data/{dataset-name}
  if (username in catalog._cache['core']) {
    res.redirect('/data/core/' + username);
    return;
  }

  res.render('community/user.html', {
    username: username
  });
};

exports.renderMarkdown = function(filepath, title, res) {
  fs.readFile(filepath, 'utf8', function(err, text) {
    var content = marked(text);
    res.render('doc.html', {
      title: title,
      content: content
    });
  });
}

