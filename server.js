var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use('/', serveStatic(path.join(__dirname, "/dist")));

var port = process.env.port || 8080;
app.listen(port);

console.log('Listening on port '+ port);