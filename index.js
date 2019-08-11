var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use('/',serveStatic(path.join(__dirname, "/dist")));

app.listen(process.env.PORT || 8080, function(){
    console.log("Listening on: ", this.address().port)
});
