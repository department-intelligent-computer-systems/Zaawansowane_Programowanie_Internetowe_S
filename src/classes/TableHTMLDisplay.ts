import { IDisplayer } from "./IDisplayer";
import { Author } from "./Author";

export class TableHTMLDisplay implements IDisplayer{
    private authors: Author[];

    constructor(authors: Author[]){
        this.authors=authors;
    }

    display(): string {
        let html = '<table>';
        html+= '<tr><th>Imie</th><th>Nazwisko</th><th>Email</th></tr>'
        for(const author of this.authors){
            html+= `<tr><td>${author.firstname}</td> <td>${author.lastname}</td>  <td>${author.email}</td></tr>`;
        }
        html+='</table>';
        return html;
    }
}