import { IDisplayer } from "./IDisplayer";
import { Author } from "./Author";

export class ListHTMLDisplay implements IDisplayer{
    private authors: Author[];

    constructor(authors: Author[]){
        this.authors=authors;
    }

    display(): string {
        let html = '<ul>';
        for(const author of this.authors){
            html+= `<li>${author.firstname} ${author.lastname} - ${author.email}</li>`;
        }
        html+='</ul>';
        return html;
    }
}