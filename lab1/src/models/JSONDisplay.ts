import { IDisplayer } from "./IDisplayer";
import { Author } from "./Author";

export class JSONDisplay implements IDisplayer {

  private authors: Author[];

  constructor(authors: Author[]) {
    this.authors = authors;
  }

  display(): string {
    return JSON.stringify(this.authors);
  }

}
