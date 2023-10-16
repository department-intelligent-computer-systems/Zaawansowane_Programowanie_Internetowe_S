import { IDisplay } from "./IDisplay";
import { Author } from "./Author";

export class DisplayHTMLTable implements IDisplay{
    private _authors: Author[];

    constructor(authors: Author[]){
        this._authors=authors;
    }
    display(): string {
        let table = '<tr>';
        for (const author of this._authors){
            table+= `<td>${author.firstname} ${author.lastname} </td> <td>${author.email}</td>`;
        }
        table += '</tr>';
        return table;
    }
}