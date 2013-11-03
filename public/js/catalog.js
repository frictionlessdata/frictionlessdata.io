var Catalog = {
  Models: {},
  Views: {}
};

(function(my, $) {
my.Views.Application = Backbone.View.extend({
  initialize: function () {
    var self = this;
    this.el = $(this.el);
    _.bindAll(this);
  },

  // Helpers
  // -------

  // Views
  // -------
});

my.Views.DataFile = Backbone.View.extend({
  initialize: function() {
    this.$el = $(this.el);
    _.bindAll(this);
  },

  render: function() {
    var $viewer = this.$el;
    $viewer.html('Loading View <img src="http://assets.okfn.org/images/icons/ajaxload-circle.gif" />');
    var resourceIndex = 0;
    var table = my.dataPackageResourceToDataset(this.model.toJSON(), resourceIndex);
    table.fetch().done(function() {
      var gridView = {
          id: 'grid',
          label: 'Table',
          type: 'SlickGrid',
          state: {
            fitColumns: true
          }
        };
      DataViews.push(gridView); 
      var viewsForRecline = _.map(DataViews, function(viewInfo) {
        var out = _.clone(viewInfo);
        out.view = new recline.View[viewInfo.type]({
          model: table,
          state: viewInfo.state
        });
        if (!out.label) {
          out.label = out.id;
        }
        return out;
      });

      var explorer = new recline.View.MultiView({
        model: table,
        views: viewsForRecline,
        sidebarViews: []
      });
      $viewer.empty().append(explorer.el);

      table.query({size: table.recordCount});
    });
    return this;
  }
});

my.Views.Search = Backbone.View.extend({
  events: {
    'submit .dataset-search': 'onSearchSubmit'
  },

  initialize: function() {
    this.$el = $(this.el);
  },

  onSearchSubmit: function(e) {
    var self = this;
    e.preventDefault();
    var q = $(e.target).find('input').val();
    this.model.search(q, function(error, result) {
      self.results.reset(result);
    });
  }
});

my.Models.DataFile = Backbone.Model.extend({
});

// convert a Data Package structure to a recline.Model.Dataset
my.dataPackageResourceToDataset = function(dataPackage, resourceIndex) {
  if (!resourceIndex) {
    resourceIndex = 0;
  }
  var reclineInfo = dataPackage.resources[resourceIndex];
  reclineInfo.backend = 'csv';
  // Recline expects fields at top level
  reclineInfo.fields = _.map(reclineInfo.schema.fields, function(field) {
    if (field.name && !field.id) {
      field.id = field.name;
    }
    return field;
  });
  if (reclineInfo.localurl) {
    reclineInfo.remoteurl = reclineInfo.url;
    reclineInfo.url = reclineInfo.localurl;
  }
  var dataset = new recline.Model.Dataset(reclineInfo);
  return dataset;
}

}(Catalog, jQuery));

