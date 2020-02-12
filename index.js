var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

var app = express();

app.use(history());
app.use(express.static(__dirname))
app.listen(process.env.PORT || 8080, function(){
    console.log("Listening on: ", this.address().port)
});
