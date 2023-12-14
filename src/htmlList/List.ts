import { Author } from "../classes/Author";
import { IShow } from "../interfaces/IShow";

export class List implements IShow {
  private _authors: Author[];

  constructor(authors: Author[]) {
    this._authors = authors;
  }

  show(): void {
    let listRow = "<ul>";

    for (const author of this._authors) {
      listRow += `<li>${author.firstName} ${author.lastName}, ${author.email}</li>`;
    }
    listRow += "</ul>";

    const listContainer = document.getElementById("list-container");
    if(listContainer) {
      listContainer.innerHTML = listRow;
    }
    
  }
}
