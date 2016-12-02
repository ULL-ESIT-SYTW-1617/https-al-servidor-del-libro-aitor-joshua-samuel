#Practica HTTPS para el servidor del libro

```openssl genrsa -des3 -out localhost.key 1024```

* Ponemos password

```openssl req -new -key localhost.key -out localhost.csr```

* Ponemos pass

```openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt```

* Ponemos pass

Creamos el servidor que será similar al siguiente:

```Javascript
var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt')
  passphrase: 'PASS ELEGIDA'
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("¡Responidiendo por SSL!\n");
}).listen(8080);
```
