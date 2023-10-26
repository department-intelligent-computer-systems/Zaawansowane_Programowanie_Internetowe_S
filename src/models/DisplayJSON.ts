import { IDisplay } from "./IDisplay";
import { Author } from "./Author";


export class DisplayJSON implements IDisplay{
    private _authors: Author[];

    constructor(authors:Author[]){
        this._authors=authors;
    }

    display(): string {
        return JSON.stringify(this._authors);
    }
}