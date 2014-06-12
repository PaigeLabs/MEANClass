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

server.use('/api', router);

router.get('/', function(req,res){
   res.json({'message':'we are aliiiive'});
});

var port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', function(){
    console.log('Express server listening on 0.0.0.0:3000...');
});