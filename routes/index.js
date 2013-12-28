var fs = require('fs')
  , request = require('request')
  , marked = require('marked')
  , csv = require('csv')

  , tools = require('datapackage')
  , model = require('../lib/model.js')
  ;

var catalog = new model.Catalog();
exports.catalog = catalog;

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

exports.roadmap = function(req, res) {
  renderMarkdown('doc/roadmap.md', 'Roadmap', res);
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

exports.standardsDataPackage = function(req, res) {
  fs.readFile('views/standards/data-package.md', 'utf8', function(err, text) {
    var content = marked(text);
    res.render('base.html', {
      title: 'Data Package - Standards',
      content: content
    });
  });
};

exports.standardsSimpleDataFormat = function(req, res) {
  fs.readFile('views/standards/simple-data-format.md', 'utf8', function(err, text) {
    var content = marked(text);
    res.render('base.html', {
      title: 'Simple Data Format - Standards',
      content: content
    });
  });
};

exports.standardsCsv = function(req, res) {
  fs.readFile('views/standards/csv.md', 'utf8', function(err, text) {
    var content = marked(text);
    res.render('base.html', {
      title: 'CSV / Comma Separated Variables - Standards',
      content: content
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
  var dpurl = req.query.url.replace(/datapackage.json$/, '');
  var dpurl = dpurl.replace(/\/$/, '');
  dpurl += '/datapackage.json';
  tools.validateUrl(dpurl, function(data) {
    res.json(data);
  });
};

exports.toolsDpValidate = function(req, res) {
  var url = req.query.url;
  if (!url) {
    res.render('tools/dp/validate.html');
  } else {
    tools.validateUrl(url, function(data) {
      res.render('tools/dp/validate.html', {
        url: url,
        result: data
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
  datasets = catalog.query();
  total = datasets.length;
  res.render('data/index.html', {
    total: total,
    datasets: datasets
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
  var dataset = catalog.get(id)
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
  var dataset = catalog.get(id)
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
  request.get(url).pipe(res);
};

exports.dataShow = function(req, res) {
  var id = req.params.id;
  var dataset = catalog.get(id)
  if (!dataset) {
    res.send(404, 'Not Found');
    return;
  }
  // deep copy
  dataset = JSON.parse(JSON.stringify(dataset));
  if (dataset.resources && dataset.resources.length > 0) {
    // Get the primary resource for use in JS
    // deep copy and then "fix" in various ways
    var resource = JSON.parse(JSON.stringify(dataset.resources[0]));
    resource.dataset_name = dataset.id;
    resource.url = '/data/' + id + '.csv';
    dataset.download_url = resource.url;
    resource.backend = 'csv';
    resource.fields = resource.schema.fields;
  }
  dataset.resources.forEach(function(resource, idx) {
    // set special local url for use in javascript
    var resourceName = resource.name || idx;
    resource.localurl = '/data/' + id + '/r/' + resourceName + '.csv';
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

exports.communityDataView = function(req, res) {
  var username = req.params.username;
  var url = 'https://raw.github.com/' +
    [username, req.params.repo, 'master', 'datapackage.json'].join('/');
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
    res.render('community/dataset.html', {
      username: username,
      dataset: dpkg,
      jsonDataPackage: JSON.stringify(dpkg),
      dataViews: JSON.stringify(dataViews),
      url: url
    });
  });
};

exports.communityUser = function(req, res) {
  var username = req.params.username;
  res.render('community/user.html', {
    username: username
  });
};

function renderMarkdown(filepath, title, res) {
  fs.readFile(filepath, 'utf8', function(err, text) {
    var content = marked(text);
    res.render('doc.html', {
      title: title,
      content: content
    });
  });
}

