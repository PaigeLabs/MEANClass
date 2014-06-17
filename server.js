'use strict';

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

var server = express();
server.set('views', path.join(__dirname, 'app'));

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.use(bodyParser());
server.use(cookieParser());
server.use(session({secret:'toomanycooksinthekitchenspoilsthebroth', proxy: true}));
server.use(passport.initialize());
server.use(passport.session());
server.use(express.static(path.join(__dirname, 'app')));

server.get('/', function(req,res){
   res.render('index');
});

var router = express.Router();
require('./lib/routes')(router);
server.use('/api', router);

var port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', function(){
    console.log('The magic is happening at 0.0.0.0:3000...');
});