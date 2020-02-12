var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

var app = express();

app.use(history({
    index: 'index.html',
    rewrites: [
        { from: /\//, to: '/home'},
        { from: /\/home/, to: '/home'},
        { from: /\/musica/, to: 'musica'},
        { from: /\/peliculas/, to: '/peliculas'},
        { from: /\/galerias/, to: 'galerias'},
        { from: /\/store/, to: 'store'},
        { from: /\/educativo/, to: 'educativo'},
        { from: /\/listacontador/, to: 'listacontador'},
        { from: /\/todolist/, to: 'todolist'},
        { from: /\/usuarios/, to: '/usuarios'},
        { from: /\/spotifyList/, to: 'spotifyList'},
        { from: /\/recetas/, to: '/recetas'},
        { from: /\/admin/, to: '/admin'},
        { from: /\/product/, to: '/product'},
        { from: /\/videoCard/, to: '/videoCard'},
        { from: /\/adminPanel/, to: '/adminPanel'},
      ]
}));

app.listen(process.env.PORT || 8080, function(){
    console.log("Listening on: ", this.address().port)
});
