import { IDisplay } from "./IDisplay";
import { Author } from "./Author";

export class DisplayHTMLList implements IDisplay{
    private _authors: Author[];

    constructor(authors: Author[]){
        this._authors=authors;
    }
    display(): string {
        let list = '<ul>';
        for (const author of this._authors){
            list+= `<li>${author.firstname} ${author.lastname} : ${author.email}</li>`;
        }
        list += '</ul>';
        return list;
    }
}