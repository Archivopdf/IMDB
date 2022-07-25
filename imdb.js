"use strict";
// import {Professional} from "./professional";
// import {Movie} from "./movie";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.toString = function () {
        var salida = "";
        for (var i = 0; i < this.peliculas.length; i++) {
            salida += this.peliculas[i].toString + "\n";
        }
        return salida;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
;
// let movie1 = new Movie();
// let moive2 = new Movie();
// let movie3 = new Movie();
// let estrenos = [movie1, movie2, movie3];
// let cartelera = new Imdb (estrenos);
// console.log(cartelera);
