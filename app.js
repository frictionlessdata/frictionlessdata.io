var express = require('express')
  , path = require('path')
  , fs = require('fs')
  , nunjucks = require('nunjucks')
  ;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/templates');
  // app.set('view engine', 'html');
  // app.engine('html', require('hbs').__express);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
});

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('templates'));
env.express(app);

app.get('/', function(req, res) {
  res.render('home.html', {
    datasets: []
  });
})

app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
