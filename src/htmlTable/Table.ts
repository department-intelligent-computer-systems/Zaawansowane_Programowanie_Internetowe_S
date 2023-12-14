import { Author } from "../classes/Author";
import { IShow } from "../interfaces/IShow";


export class Table implements IShow {
    private _authors: Author[];

    constructor(authors: Author[]){
        this._authors = authors;
    }


    show(): void {
        const tableHtml = '<table>' +
            '<tr><th>Imię i Nazwisko</th><th>Email</th></tr>' +
            this._authors.map(author => `<tr><td>${author.firstName} ${author.lastName}</td><td>${author.email}</td></tr>`).join('') +
            '</table>';

        const tableContainer = document.getElementById("table-container");
        if(tableContainer) {
            tableContainer.innerHTML = tableHtml;
        }
    }
}