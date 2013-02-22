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
    var file = this.model.attributes;
    var reclineInfo = $.extend(true, {}, file);
    $viewer.html('<img src="http://assets.okfn.org/images/icons/ajaxload-circle.gif" />');
    var github = new Github({});
    var repo = github.getRepo('datasets', this.model.get('dataset_name'));
    repo.read('master', file.path, function(err, data) {
      // slice to remove first row as we already have field info
      reclineInfo.records = recline.Backend.CSV.parseCSV(data).slice(1);
      var table = new recline.Model.Dataset(reclineInfo);
      var views = [
        {
          id: 'grid',
          label: 'Grid',
          view: new recline.View.SlickGrid({
            model: table
          })
        }
      ];
      var explorer = new recline.View.MultiView({
        model: table,
        views: views,
        sidebarViews: []
      });
      $viewer.empty().append(explorer.el);

      table.query({size: reclineInfo.records.length});
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

}(Catalog, jQuery));

