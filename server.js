'use strict';

var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello world!');
});

server.listen(3000, '0.0.0.0', function(){
    console.log('server listening at 0.0.0.0:3000...');
});

