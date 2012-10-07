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

  home: function() {
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

my.Views.DatasetList = Backbone.View.extend({
  templateDataset: ' \
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
  ',

  initialize: function() {
    this.el = $(this.el);
  },

  render: function() {
    var self = this;
    this.el.html('');
    this.model.each(function(dataset) {
      var rendered = Mustache.render(self.templateDataset, dataset.toJSON());
      self.el.append(rendered);
    });
    return this;
  }
});

my.Models.Catalog = Backbone.Collection.extend({
});

my.Models.Dataset = recline.Model.Dataset.extend({
});

my.Models.DatasetList = Backbone.Collection.extend({
  model: my.Models.Dataset
});

}(Catalog, jQuery));

