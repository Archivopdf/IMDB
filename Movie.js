"use strict";
exports.__esModule = true;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.printAll = function () {
        console.log(this.title, this.releaseYear, this.actors, this.nacionality, this.writer, this.language, this.plataform, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre);
    };
    return Movie;
}());
