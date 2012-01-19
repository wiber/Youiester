var port = process.env.C9_PORT || 13853; /* Change 13087 to the port specified for your app */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port);