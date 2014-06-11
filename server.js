'use strict';

var express = require('express');

var server = express();
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.get('/', function(req,res){
    res.render('index');
});

server.listen(3000, '0.0.0.0', function(){
    console.log('Express server listening on 0.0.0.0:3000...');
});