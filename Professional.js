"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.getprofessional = function () {
        console.log("Name - " + this.name + " Age - " + this.age + " Genre - " + this.genre + " Weight - " + this.weight +
            " Height - " + this.height + " Hair Color - " + this.hairColor + " Eye Color - " + this.eyeColor +
            " Race - " + this.race + " Is Retired - " + this.isRetired + " Nationality - " + this.nationality +
            " Oscars Numbers - " + this.oscarsNumber + " Profession - " + this.profession);
        // console.log(JSON.stringify(Professional));
    };
    return Professional;
}());
exports.Professional = Professional;

