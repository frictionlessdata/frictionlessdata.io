jQuery(window).load(function() {
  var isDatasetShow = ($('.dataset.show').length > 0);
  if (isDatasetShow) {
    datasetShowSetup();
  }

  var isDatasetSearch = ($('.js-dataset-search').length > 0);
  if (isDatasetSearch) {
    datasetSearchSetup();
  }
});

function datasetSearchSetup() {
  // set up data find typeahead
  $.getJSON('/data.json', function(data) {
    var sources = _.pluck(data.datasets, 'title');
    // turns out we have some data packages with no title
    // need to filter them out or typeahead fails ...
    sources = _.filter(sources, function(title) {
      return Boolean(title);
    });
    $('.js-dataset-search').typeahead({
      source: sources,
      updater: function(item) {
        var dataset = _.filter(data.datasets, function(ds) {
          return (ds.title == item);
        })[0]
          ;
        window.location = '/data/' + dataset.owner + '/' + dataset.name;
      }
    });
  });
}

function datasetShowSetup() {
  // DataFileData will be defined in Jinja template
  if (DataViews.length > 0) {
    var datafile = new Catalog.Models.DataFile(DataPackageData);
    var view = new Catalog.Views.DataFile({
      model: datafile,
      el: $('.viewer')
    });
    view.render();
  }

  // create a grid view for each resource in the page
  $('.js-show-recline-grid').each(function(idx, $el) {
    var resourceIndex = $($el).data('resource-index');
    var reclineDataset = Catalog.dataPackageResourceToDataset(DataPackageData, resourceIndex);
    reclineDataset.fetch().done(function() {
      var multiViewGridView = new recline.View.MultiView({
        el: $el,
        model: reclineDataset,
        views: [{
          id: 'grid',
          label: 'Data Table',
          view: new recline.View.SlickGrid({
            model: reclineDataset,
            state: {
              fitColumns: true
            }
          })
        }],
        sidebarViews: []
      });
      reclineDataset.query({size: reclineDataset.recordCount});
    });
  });

  $('.js-show-geojson').each(function(idx, $el) {
    $el = $($el);
    var resourceIndex = $el.data('resource-index');
    var resource = DataPackageData.resources[resourceIndex];
    var dataUrl = resource.localurl || resource.url;
    // TODO: error handling
    $.getJSON(dataUrl, function(geoJsonData) {
      var map = new L.Map($el.get(0));
      var mapUrl = "//otile{s}-s.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png";
      var osmAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="//developer.mapquest.com/content/osm/mq_logo.png">';
      var bg = new L.TileLayer(mapUrl, {maxZoom: 18, attribution: osmAttribution ,subdomains: '1234'});
      map.addLayer(bg);

      var myLayer = L.geoJson().addTo(map);
      myLayer.addData(geoJsonData);

      map.fitBounds(myLayer.getBounds());
    });
  });
}
