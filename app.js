
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var expressMessages = require('express-messages');
var connectFlash = require('connect-flash');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

  app.use(cookieParser('secret'));
  app.use(session({cookie: { maxAge: 60000 }}));
  //app.use(flash());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});



// Routes
app.get('/', routes.index);
app.get('/join', routes.getJoin);
app.post('/join', routes.postJoin);


app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
