import { Imdb } from "./imdb";
import { Movie } from "./movie";



var movie1 = new Movie("a", 1995, "española", "spifi");
var movie2 = new Movie("b", 2021, "turca", "accion");
var movie3 = new Movie("c", 2015, "francesa", "terror");

let imdbprueba = new Imdb([movie1, movie2, movie3]);

let rawdata = fs.readFileSync("imdbBBDD.json", "utf-8");
let imdb2 = new Imdb(JSON.parse(rawdata));

let imdb3 = new Imdb(JSON.parse(fs.readFileSync("imdbBBDD.json", "utf-8")))