var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('10.6.128.174.key'),
  cert: fs.readFileSync('10.6.128.174.crt'),
  passphrase: 'sytw'
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("PRUEBA");
}).listen(8080);
