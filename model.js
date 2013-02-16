var request = require('request');

var Catalog = function() {
  this._cache = {};
};

Catalog.prototype.load = function(datapackages) {
  var that = this;
  for (id in datapackages) {
    var dp = datapackages[id];
    if (!dp.id) {
      dp.id = dp.name || 'no-id';
    }
    that._cache[id] = dp;
  }
}

Catalog.prototype.loadURL = function(url, cb) {
  var that = this;
  request(url, function(err, res, body) {
    if (err) {
      cb(err);
    } else {
      that.load(JSON.parse(body));
      cb();
    }
  });
}

Catalog.prototype.get = function(id) {
  return this._cache[id];
}

Catalog.prototype.query = function(q) {
  var that = this;
  // TODO: actual search
  return Object.keys(this._cache).map(function(key) { return that._cache[key]
  });
}

exports.Catalog = Catalog;
