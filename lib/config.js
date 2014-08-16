var CATALOG_URL_DEFAULT = 'http://raw.github.com/datasets/registry/master/github-list.txt';
var CORE_CATALOG_DEFAULT = 'http://raw.github.com/datasets/registry/master/datapackage-list.txt';

var config = {
  CATALOG_LIST: process.env.CATALOG_LIST || CATALOG_URL_DEFAULT,
  CORE_CATALOG_LIST: process.env.CORE_CATALOG_LIST || CORE_CATALOG_DEFAULT
}

module.exports = config;

