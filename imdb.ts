
// import {Professional} from "./professional";
// import {Movie} from "./movie";

class Imdb {

    public peliculas: Movie[];

    constructor(peliculas: Movie[]){

        this.peliculas = peliculas

    }
      public toString() {
    let salida: string = "";

    for (let i = 0; i < this.peliculas.length; i++) {
      salida += this.peliculas[i].toString + "\n";
    }

    return salida;
    
    }};

    export {Imdb};

    // let movie1 = new Movie();
    // let moive2 = new Movie();
    // let movie3 = new Movie();

    // let estrenos = [movie1, movie2, movie3];
    // let cartelera = new Imdb (estrenos);
    // console.log(cartelera);