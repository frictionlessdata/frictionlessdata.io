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
    var datafile = new Catalog.Models.DataFile(DataFileData);
    var view = new Catalog.Views.DataFile({
      model: datafile,
      el: $('.viewer')
    });
    view.render();
  }
});

