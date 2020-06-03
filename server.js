var http = require('http');
var url = require('url');
var express= require('express')
var fs = require('fs');

var server= http.createServer(function(res,req){
    fs.readFile('index.html', function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);