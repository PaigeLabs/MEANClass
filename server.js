'use strict';

var express = require('express');

var server = express();

server.get('/', function(req,res){
    res.send(200, 'You got it!');
});

server.listen(3000, '0.0.0.0', function(){
    console.log('Express server listening on 0.0.0.0:3000...');
})
