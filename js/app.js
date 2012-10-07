jQuery(document).ready(function($) {
  var catalog = new Catalog.Models.Catalog({
    datasets: DATASETS
  });
  window.catalog = new Catalog.Views.Application({
    model: catalog,
    el: $('body')
  });
  Backbone.history.start();

  $('.dataset-search').submit();
});

function search(q) {
  // crude regex on titles?
  return DATASETS;
}

var DATASETS = [
  {
    "name": "gdp",
    "title": "Country, Regional and World GDP (Gross Domestic Product)",
    "description": "Country, regional and world GDP in current US Dollars ($). Regional means collections of countries e.g. Europe & Central Asia. Data is sourced from the World Bank and converted to a standard normalized CSV.",
    "licenses": [
      {
        "id": "odc-pddl",
        "url": "http://opendatacommons.org/licenses/pddl/"
      }
    ],
    "keywords": [ "GDP", "World", "Gross Domestic Product", "Time series" ],
    "version": "2011",
    "image": "http://assets.okfn.org/p/opendatahandbook/img/data-wrench.png",
    "source": "World Bank and OECD"
  },
  {
    "title": "ISO 3166-2: 2 Digit Country Codes",
    "name": "iso-country-codes-2",
    "keywords": ["iso", "country codes", "3166-2"],
    "source": "ISO"
  }
];
