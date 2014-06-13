'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    flash = require('express-flash'),
    LocalStrategy = require('passport-local').Strategy;

var server = express();
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.use(bodyParser());
server.use(cookieParser());
server.use(session({secret:'toomanycooksinthekitchenspoilsthebroth', proxy: true}));
server.use(passport.initialize());
server.use(passport.session());
server.use(flash());

passport.serializeUser(function(user, done){
    done(null, user);
});
passport.deserializeUser(function(user, done){
    done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done){
    if(username==='leebrandt' && password === 'password'){
        return done(null, user);
    }
    return done(null, false, {message:'Unsuccessful!'});
}));

server.get('/login', function(req,res){
   res.render('login');
});
server.post('/login', passport.authenticate(
    'local',
    {
        successRedirect:'/',
        failureRedirect: '/login'
    })
);

var router = express.Router();
require('./app/routes')(router);
server.use('/api', router);

var port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', function(){
    console.log('The magic is happening at 0.0.0.0:3000...');
});