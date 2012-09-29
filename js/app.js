jQuery(document).ready(function($) {
  displaySearchResults(search());

  $('.dataset-search').submit(function(e) {
    e.preventDefault();
    var q = $(e.target).find('input').val();
    displaySearchResults(search(q));
  });

  $('.js-dataset-query').typeahead({
    source: _.pluck(DATASETS, 'title'),
    updater: function(item) {
      return item;
    }
  });
});

function search(q) {
  // crude regex on titles?
  return DATASETS;
}

function displaySearchResults(datasets) {
  $('.datasets .results').html('');
  _.each(datasets, function(dataset) {
    $('.datasets .results').append(Mustache.render(datasetTemplate, dataset));
  });
}

var datasetTemplate = ' \
  <div class="dataset summary"> \
    {{#image}} \
    <img src="{{image}}" alt="{{title}}" class="logo" /> \
    {{/image}} \
    <h3><a href="#dataset/{{name}}">{{title}}</a></h3> \
    <div class="description">{{description}}</div> \
    <div class="source">Source: {{source}}</div> \
    <ul class="keywords"> \
      {{#keywords}} \
      <li>{{.}} \
      {{/keywords}} \
    </ul> \
  <div> \
';

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
