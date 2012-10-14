jQuery(document).ready(function($) {
  window.catalog = new Catalog.Views.Application({
    el: $('body')
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

