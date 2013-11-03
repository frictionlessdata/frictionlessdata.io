jQuery(window).load(function() {
  // set up data find typeahead
  $.getJSON('/data.json', function(data) {
    var sources = _.pluck(data.datasets, 'title');
    $('.navbar .typeahead').typeahead({
      source: sources,
      updater: function(item) {
        var _id = _.filter(data.datasets, function(ds) {
          return (ds.title == item);
        })[0].id
          ;
        window.location = '/data/' + _id;
      }
    });
  });

  var isDatasetShow = ($('.dataset.show').length > 0);
  if (isDatasetShow) {
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
    $('.show-recline-grid').each(function(idx, $el) {
      var resourceIndex = $($el).data('resource-index');
      var reclineDataset = Catalog.dataPackageResourceToDataset(DataPackageData, idx);
      reclineDataset.fetch().done(function() {
        var gridView = new recline.View.SlickGrid({
          model: reclineDataset,
          el: $el,
          state: {
            fitColumns: true
          }
        });
        gridView.visible = true;
        gridView.render();
        reclineDataset.query({size: reclineDataset.recordCount});
      });
    });
  }
});

