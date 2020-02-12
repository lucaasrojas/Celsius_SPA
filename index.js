var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

var app = express();

// app.use('/', serveStatic(path.join(__dirname, "/dist")));
app.use(history({
    rewrites: [
        { from: /\//, to: path.join(__dirname, '/dist/home')},
        { from: /\/home/, to: path.join(__dirname, '/dist/home')},
        { from: /\/musica/, to: '/musica'},
        { from: /\/peliculas/, to: '/peliculas'},
        { from: /\/galerias/, to: '/galerias'},
        { from: /\/store/, to: path.join(__dirname, '/dist/store')},
        { from: /\/educativo/, to: path.join(__dirname, '/dist/educativo')},
        { from: /\/listacontador/, to: '/listacontador'},
        { from: /\/todolist/, to: '/todolist'},
        { from: /\/usuarios/, to: '/usuarios'},
        { from: /\/spotifyList/, to: path.join(__dirname, '/dist/spotifyList')},
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
