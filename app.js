var fs = require("fs");
var express = require("express");
var https = require('https');

var app = express();


// Hello World
app.get('/', function(req, res) {
    res.send('Hello World!');
});

https.createServer({
        key: fs.readFileSync('./keys/10.6.128.174.key'),
        cert: fs.readFileSync('./keys/10.6.128.174.crt'),
        passphrase: 'sytw'
    }, app)
    .listen(8080, function() {
        console.log('Secure Server listening on port ' + 8080);
    });
