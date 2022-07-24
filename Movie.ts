import {Professional} from "./Professional";

class Movie {

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: Professional[];
    public writer: Professional[];
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: Professional[];
    public distributor: string;
    public genre: string;

    constructor (title:string, releaseYear:number, nacionality: Professional[], genre:string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre

    }

    public printAll (): void{
        console.log( this.title, this.releaseYear, this.actors, this.nacionality, this.writer,
             this.language, this.plataform, this.isMCU, this.mainCharacterName, this.producer, 
             this.distributor, this.genre );
       }
   

}