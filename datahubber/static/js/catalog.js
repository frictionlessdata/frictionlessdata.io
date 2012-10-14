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

  datasetShow: function(name) {
    var self = this;
    this.model.getByName(name, function(err, dataset) {
      var view = new my.Views.Dataset({
        model: dataset
      });
      view.render();
      self.el.find('.view.dataset').empty().append(view.el);
      self.setTitle(dataset.get('title'));
      self.switchView('dataset');
    });
  }
});

my.Views.Dataset = Backbone.View.extend({
  template: ' \
    <div class="dataset show"> \
      <div class="row"> \
        <div class="span8"> \
          {{#image}} \
          <img src="{{image}}" alt="{{title}}" class="logo" /> \
          {{/image}} \
          <div class="description">{{description}}</div> \
        </div> \
        <div class="span4"> \
          <div class="actions"> \
            <a href="{{download_url}}" class="btn btn-large"><i class="icon-download-alt"></i> Download</a> \
          </div> \
          <div class="source">Source: {{source}}</div> \
          <ul class="keywords"> \
            {{#keywords}} \
            <li>{{.}} \
            {{/keywords}} \
          </ul> \
        </div> \
      </div> \
      <div class="viewer"></div> \
    <div> \
  ',

  initialize: function() {
    this.$el = $(this.el);
    _.bindAll(this);
  },

  render: function() {
    var self = this;
    var data = this.model.toJSON();
    data.download_url = data.files[0].url;
    var rendered = Mustache.render(self.template, data);
    this.$el.append(rendered);
    this._loadViewer();
    return this;
  },

  _loadViewer: function() {
    var $viewer = this.$el.find('.viewer'); 
    var file = this.model.get('files')[0];
    var reclineInfo = $.extend(true, {}, file);
    $viewer.html('<img src="http://assets.okfn.org/images/icons/ajaxload-circle.gif" />');
    var github = new Github({});
    var repo = github.getRepo('datasets', this.model.get('name'));
    repo.read('master', file.path, function(err, data) {
      // slice to remove first row as we already have field info
      reclineInfo.records = recline.Backend.CSV.parseCSV(data).slice(1);
      var table = new recline.Model.Dataset(reclineInfo);
      table.query({size: reclineInfo.records.length});
      var grid = new recline.View.SlickGrid({
        model: table
      });
      $viewer.empty().append(grid.el);
      grid.visible = true;
      grid.render();
    });
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

my.Models.Dataset = Backbone.Model.extend({
});

}(Catalog, jQuery));

