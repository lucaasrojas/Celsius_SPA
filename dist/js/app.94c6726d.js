(function(e){function a(a){for(var t,s,o=a[0],l=a[1],c=a[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,a=0;a<n.length;a++){for(var i=n[a],t=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(t=!1)}t&&(n.splice(a--,1),e=s(s.s=i[0]))}return e}var t={},r={app:0},n=[];function s(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,a,i){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(i,t,function(a){return e[a]}.bind(null,t));return i},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"02ac":function(e,a,i){"use strict";var t=i("835f"),r=i.n(t);r.a},"034f":function(e,a,i){"use strict";var t=i("c21b"),r=i.n(t);r.a},"0b0d":function(e,a,i){},3716:function(e,a,i){"use strict";var t=i("c7bd"),r=i.n(t);r.a},"56d7":function(e,a,i){"use strict";i.r(a);i("cadf"),i("551c"),i("097d");var t=i("2b0e"),r=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"app"}},[i("router-link",{attrs:{to:"/"}},[e._v("Home")]),i("router-link",{attrs:{to:"/musica"}},[e._v("Musica")]),i("router-link",{attrs:{to:"/peliculas"}},[e._v("Peliculas")]),i("hr"),i("router-view")],1)},n=[],s=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("h1",[e._v("Home page")]),i("div",{staticClass:"contenedor container"},[i("div",{staticClass:"row"},[i("div",[i("img",{attrs:{src:"/src/images/mosaicogalerias.png"}}),i("img",{attrs:{src:"src/images/galerias.png"}})]),i("div",[i("img",{attrs:{src:"src/images/mosaicopeliculas.png"}})]),i("div",[i("img",{attrs:{src:"images/mosaicomusica.png"}}),i("img",{attrs:{src:"src/images/musicaa.png"}})])])])])}],l={},c=l,u=(i("02ac"),i("2877")),d=Object(u["a"])(c,s,o,!1,null,"707c2a36",null);d.options.__file="Home.vue";var p=d.exports,m={name:"app",components:{Home:p}},g=m,v=(i("034f"),Object(u["a"])(g,r,n,!1,null,null,null));v.options.__file="App.vue";var h=v.exports,f=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("h1",[e._v("Musica")]),i("center",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/8bOVEJk28pU",frameborder:"0",allowfullscreen:""}}),i("br"),i("img",{attrs:{src:"barra.png"}}),i("br"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/izGwDsrQ1eQ",frameborder:"0",allowfullscreen:""}}),i("br"),i("img",{attrs:{src:"barra.png"}}),i("br"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/R044sleOW6I",frameborder:"0",allowfullscreen:""}}),i("br"),i("img",{attrs:{src:"barra.png"}}),i("br"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/BV5nuF5lFU8",frameborder:"0",allowfullscreen:""}}),i("br"),i("img",{attrs:{src:"barra.png"}}),i("br"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/0MN3rfL79EU",frameborder:"0",allowfullscreen:""}})])],1)},b=[],_={},w=_,M=(i("dbb0"),Object(u["a"])(w,f,b,!1,null,"1759d425",null));M.options.__file="Musica.vue";var y=M.exports,j=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("h1",[e._v("Peliculas")]),i("div",[i("p",[i("img",{attrs:{src:"http://ia.media-imdb.com/images/M/MV5BMTcyMDI2NjU2Ml5BMl5BanBnXkFtZTcwNjA4MzQzNw@@._V1._SY317_.jpg",align:"right",width:"300",height:"450"}}),i("center",[i("h3",[e._v("Ficha Tecnica")]),i("ul",{staticClass:"a"},[i("li",[e._v("Titulo original: Friends With Kids")]),i("li",[e._v("Titulo espa�ol: Plan Perfecto")]),i("li",[e._v("Idioma: Ingles")]),i("li",[e._v("A�o: 2012")]),i("li",[e._v("Subtitulos: Espa�ol pegados al v�deo.")]),i("li",[e._v("G�nero: Comedia")]),i("li",[e._v("Tama�o: 699MB aprox.")]),i("li",[e._v("V�deo: AVI | 624x352 | DVDRip")])])]),i("center",[i("h3",[e._v("Sinopsis")]),i("txtsinopsis",[e._v("Julie vive en Manhattan, y convence a su amigo Jason (por quien siempre ha tenido un amor plat�nico) para que tengan un hijo. As�, enfrentan las responsabilidades de ser padres, pero sin las complicaciones de estar en una relaci�n, en contraste con la de las dos parejas que frecuentan. Sin embargo, las cosas cambian para Julie y Jason cuando �l se enamora de una artista y ella comienza a salir con un exitoso empresario.")]),i("br"),i("a",{attrs:{href:"http://depositfiles.com/files/7zga96wbr"}},[i("img",{attrs:{src:"src/images/btndescarga.png"}})])],1)],1),i("br"),i("center",[i("img",{attrs:{src:"barra.png"}})]),i("br"),i("p",[i("img",{attrs:{src:"http://ia.media-imdb.com/images/M/MV5BMjE3MjkwMzQ2M15BMl5BanBnXkFtZTcwNjIwNDY0Nw@@._V1._SY317_CR0,0,214,317_.jpg",align:"left",width:"275",height:"400"}}),i("center",[i("h3",[e._v("Ficha Tecnica")]),i("ul",{staticClass:"a"},[i("li",[e._v("Titulo original: Cleanskin")]),i("li",[e._v("Titulo espa�ol: Cleanskin")]),i("li",[e._v("Idioma: Ingles")]),i("li",[e._v("A�o: 2012")]),i("li",[e._v("Subtitulos: Espa�ol pegados al v�deo.")]),i("li",[e._v("G�nero: Crimen / Drama / Thriller")]),i("li",[e._v("Tama�o: 953MB aprox.")]),i("li",[e._v("V�deo: AVI | 720x304 | BRRip")])])]),i("center",[i("h3",[e._v("Sinopsis")]),i("txtsinopsis",[e._v("Ewan es un agente del Servicio Secreto cuya misi�n consiste en capturar y eliminar a Ash, un terrorista suicida, y a la c�lula a la que pertenece. Mientras tanto, Ash se enfrenta a un dilema moral.")]),i("br"),i("a",{attrs:{href:"http://depositfiles.com/files/tkhdnsy5w"}},[i("img",{attrs:{src:"src/images/btndescarga.png"}})])],1)],1),i("br"),i("center",[i("img",{attrs:{src:"barra.png"}})]),i("br"),i("p",[i("img",{attrs:{src:"http://ia.media-imdb.com/images/M/MV5BMTg0MTQzMzMzOF5BMl5BanBnXkFtZTcwOTUwNjYwNw@@._V1._SY317_CR4,0,214,317_.jpg",align:"right",width:"330",height:"500"}}),i("center",[i("h3",[e._v("Ficha Tecnica")]),i("ul",{staticClass:"a"},[i("li",[e._v("Titulo original: The Last Death")]),i("li",[e._v("Titulo espa�ol: La �ltima Muerte")]),i("li",[e._v("Idioma: Espa�ol Latino")]),i("li",[e._v("A�o: 2011")]),i("li",[e._v("G�nero: Ciencia Ficci�n")]),i("li",[e._v("Tama�o: 700MB aprox.")]),i("li",[e._v("V�deo: AVI | 640x288 | DVDRip")])])]),i("center",[i("h3",[e._v("Sinopsis")]),i("txtsinopsis",[e._v("En un futuro cercano, Jaime, un psicoanalista con problemas de alcoholismo, encuentra a un joven desnudo y malherido cerca de su caba�a. Con lesiones severas y sufriendo de amnesia, el muchacho es internado en un hospital donde se dan cuenta de que su identidad no est� registrada en el Banco Mundial de Informaci�n Personal. Esto genera alerta entre las autoridades que de inmediato intentan apresar al joven, pero �ste es ayudado por Jaime para escapar. Intrigado por la identidad del muchacho, Jaime empieza a investigar porqu� lo persiguen� encontr�ndose con una amenaza a�n mayor, porque detr�s de todo, est� Mateo Wilkins, un poderoso empresario que lleva a�os haciendo experimentos secretos en los que el joven parece estar implicado.")]),i("br"),i("a",{attrs:{href:"http://depositfiles.com/files/tkhdnsy5w"}},[i("img",{attrs:{src:"src/images/btndescarga.png"}})])],1)],1),i("br"),i("center",[i("img",{attrs:{src:"barra.png"}})]),i("br"),i("p",[i("img",{attrs:{src:"http://ia.media-imdb.com/images/M/MV5BMjIyOTQwODI1OV5BMl5BanBnXkFtZTcwMjU3MjA1Nw@@._V1._SY317_.jpg",align:"left",width:"300",height:"450"}}),i("center",[i("h3",[e._v("Ficha Tecnica")]),i("ul",{staticClass:"a"},[i("li",[e._v("Titulo original: Lockout")]),i("li",[e._v("Titulo espa�ol: MS1: M�xima seguridad")]),i("li",[e._v("Idioma: Ingles")]),i("li",[e._v("A�o: 2012")]),i("li",[e._v("Subtitulos: Espa�ol pegados al v�deo.")]),i("li",[e._v("G�nero: Thriller / Acci�n / Ciencia Ficci�n")]),i("li",[e._v("Tama�o: 702MB aprox.")]),i("li",[e._v("V�deo: AVI | 640x272 | DVDRip")])])]),i("center",[i("h3",[e._v("Sinopsis")]),i("txtsinopsis",[e._v("MS1 es una prisi�n experimental en el espacio, donde los 500 criminales m�s peligrosos del planeta se encuentran retenidos en un estado de �letargo� inducido. A la cabeza de una misi�n humanitaria, la hija del presidente de los Estados Unidos, Emilie Warnock (Maggie Grace) llega a bordo de la prisi�n justo antes del estallido de un mot�n. Emilie y los trabajadores de la MS1 son tomados como rehenes por los violentos internos. El presidente Warnock decide enviar al agente Snow (Guy Pierce) a la MS1 con la �nica misi�n de salvar a Emilie a toda costa.")]),i("br"),i("a",{attrs:{href:"http://depositfiles.com/files/x0oa1vmm6"}},[i("img",{attrs:{src:"src/images/btndescarga.png"}})])],1)],1)],1)])},T=[],x={},S=x,B=(i("3716"),Object(u["a"])(S,j,T,!1,null,"71def3f2",null));B.options.__file="Peliculas.vue";var V=B.exports,k=i("8c4f");t["a"].config.productionTip=!1,t["a"].use(k["a"]);var E=new k["a"]({routes:[{path:"/",component:p},{path:"/musica",component:y},{path:"/peliculas",component:V}]});new t["a"]({router:E,render:function(e){return e(h)}}).$mount("#app")},"835f":function(e,a,i){},c21b:function(e,a,i){},c7bd:function(e,a,i){},dbb0:function(e,a,i){"use strict";var t=i("0b0d"),r=i.n(t);r.a}});
//# sourceMappingURL=app.94c6726d.js.map