import { IDisplay } from "../interface/IDisplay";
import { Author } from "../models/Author";

export class DisplayHTMLList implements IDisplay {
  private _authors: Author[];

  constructor(authors: Author[]) {
    this._authors = authors;
  }
  display(): string {
    let list = "<ul>";
    for (const author of this._authors) {
      list += `<li>${author.firstname} ${author.lastname} : ${author.email}</li>`;
    }
    list += "</ul>";
    return list;
  }
}

export class DisplayHTMLTable implements IDisplay {
  private _authors: Author[];

  constructor(authors: Author[]) {
    this._authors = authors;
  }
  display(): string {
    let table = "<tr>";
    for (const author of this._authors) {
      table += `<td>${author.firstname} ${author.lastname} </td> <td>${author.email}</td>`;
    }
    table += "</tr>";
    return table;
  }
}

export class DisplayJSON implements IDisplay {
  private _authors: Author[];

  constructor(authors: Author[]) {
    this._authors = authors;
  }

  display(): string {
    return JSON.stringify(this._authors);
  }
}
