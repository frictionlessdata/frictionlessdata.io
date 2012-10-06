var Catalog = {
  Models: {},
  Views: {}
};

(function(my) {
my.Views.Application = Backbone.View.extend({
  initialize: function () {
    var self = this;
    this.el = $(this.el);
    _.bindAll(this);
    this.router = new Backbone.Router();
    this.router.route('', 'home', function() {
      self.switchView('home');
    });
    this.router.route('about', 'about', function() {
      self.switchView('about');
    });
    this.router.route('dataset/:id', 'dataset', function(id) {
      self.datasetShow(id);
    });
  },

  // Helpers
  // -------

  switchView: function(name) {
    this.el.removeClass().addClass('current-view- '+name);
    this.el.find('.view').hide();
    $('.view.' + name).show();
    var toNavigateTo = (name == 'home') ? '' : name;
    this.router.navigate(toNavigateTo);
  },

  datasetShow: function(id) {
    var view = new my.Views.Dataset({
    });
    view.render();
    // append el
    this.switchView('dataset');
  }
});

my.Views.Dataset = Backbone.View.extend({
});

my.Models.Catalog = Backbone.Collection.extend({
});

}(Catalog));

