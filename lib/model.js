var request = require('request')
  , marked = require('marked')
  , tools = require('datapackage-read')
  ;

var Catalog = function() {
  this._cache = {};
};

Catalog.prototype.load = function(datapackages) {
  var that = this;
  that._list = datapackages;
  datapackages.forEach(function(dp) {
    if (! (dp.owner in that._cache)) {
      that._cache[dp.owner] = {};
    }
    that._cache[dp.owner][dp.name] = dp;
  });
}

Catalog.prototype.get = function(owner, id) {
  return owner in this._cache ? this._cache[owner][id] : null;
}

Catalog.prototype.byOwner = function(owner) {
  var that = this;
  if (owner in this._cache) {
    return Object.keys(this._cache[owner]).map(function(key) {
      return that._cache[owner][key];
    });;
  } else {
    return [];
  }
}

Catalog.prototype.query = function(q) {
  var that = this;
  // TODO: actual search
  return this._list;
}

Catalog.prototype.loadUrl = function(mainListUrl, coreListUrl, cb) {
  var that = this;
  getDataPackageLists(mainListUrl, coreListUrl, function(err, dpUrls, coreUrls) {
    loadDataPackages(dpUrls, function(err, results) {
      if (err) {
        cb(err);
        return;
      }
      var dps = results.map(function(item) {
        var owner = 'anon';
        item.dp.isCore = false;

        if (item.url.indexOf('//github.com') != -1) {
          var parts = item.url.split('/')
            , owner = parts[parts.length-2]
            ;
        }
        if (coreUrls.indexOf(item.url) != -1) {
          owner = 'core'
          item.dp.isCore = true;
        }
        item.dp.owner = owner;
        item.dp = tidyUpDataPackage(item.dp);
        return item.dp;
      });

      that.load(dps);

      cb(null);
    });
  });
}

function getDataPackageLists(url, coreUrl, cb) {
  var coreList = [];
  if (coreUrl) {
    request(coreUrl, function(err, res, body) {
      coreList = body.split('\n').filter(function(url) {
        return Boolean(url)
      });
      next();
    });
  } else {
    next();
  }

  function next() {
    request(url, function(err, res, body) {
      if (err) {
        cb(err);
        return;
      }
      var urls = body.split('\n').filter(function(url) {
        return Boolean(url)
      });
      cb(null, urls, coreList);
    });
  }
}

function loadDataPackages(urls, callback) {
  var output = []
    , count = urls.length
    ;
  function done() {
    count--;
    if (count == 0) callback(null, output);
  }
  urls.forEach(function(url) {
    tools.loadUrl(url, function(err, dpjson) {
      if (err) {
        console.error(url, err)
      } else {
        output.push({url: url, dp: dpjson});
      }
      done();
    });
  });
}

function tidyUpDataPackage(dp) {
  if (!dp.id) {
    dp.id = dp.name || 'no-id';
  }
  if (dp.resources && dp.resources.length > 0) {
    dp.download_url = dp.resources[0].url;
  } else {
    dp.download_url = '';
  }
  if (dp.readme) {
    dp.readme_html = marked(dp.readme);
  } else {
    dp.readme_html = '';
  }
  return dp;
}

exports.Catalog = Catalog;
