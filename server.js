'use strict';

var express = require('express'),
    bodyParser = require('body-parser');

var server = express();
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.use(bodyParser());

server.get('/', function(req,res){
   res.render('index');
});

var router = express.Router();

require('./app/routes')(router);

server.use('/api', router);


var port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', function(){
    console.log('The magic is happening at 0.0.0.0:3000...');
});