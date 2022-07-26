exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var movie1 = new movie_1.Movie("a", 1995, "española", "spifi");
var movie2 = new movie_1.Movie("b", 2021, "turca", "accion");
var movie3 = new movie_1.Movie("c", 2015, "francesa", "terror");

var imdbprueba = new imdb_1.Imdb(movie1, movie2, movie3);



var fs = require('fs');
fs.writeFileSync("imdbBBDD.json", JSON.stringify(imdbprueba));