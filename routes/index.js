var fs = require('fs')
  , request = require('request')
  , marked = require('marked')
  , csv = require('csv')
  , underscore = require('underscore')

  , config = require('../lib/config')
  , tools = require('datapackage')
  , model = require('../lib/model.js')
  , spec = require('datapackage-spec')
  , validate  = require('datapackage-validate')
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

exports.publish = function(req, res) {
  fs.readFile('doc/publish-tabular.md', 'utf8', function(err, text) {
    var content = marked(text);
    res.render('publish.html', {
      title: 'Publishing Data',
      content: content
    });
  });
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

// /tools/creator.json?name=abc&title=
exports.toolsDpCreateJSON = function(req, res) {
  var out = {};
  tools.create(req.query, function(error, dp) {
    if (error) {
      res.send(500, error)
    } else {
      res.json(dp);
    }
  });
};

exports.toolsDpCreate = function(req, res) {
  res.render('tools/dp/create.html');
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

exports.dataShowJSON = function(req, res) {
  var id = req.params.id;
  var dataset = catalog.get(req.params.owner, id)
  if (!dataset) {
    res.send(404, 'Not Found');
  }
  res.json(dataset);
};

// we support paths like
// /{dataset-id}/r/{name}.csv
// where name is either resource name or index of the resource
exports.dataShowCSV = function(req, res) {
  var id = req.params.id
    , resourceName = req.params.name
    , resourceIndex = 0
    ;
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
  res.set('Content-Type', 'text/plain');
  request.get(url).pipe(res);
};

exports.dataShow = function(req, res) {
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

