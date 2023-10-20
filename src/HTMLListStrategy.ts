import Author, { DataRetrievalStrategy } from "./Author";

export class HTMLListStrategy implements DataRetrievalStrategy {
  retrieveData(authors: Author[]): string {
    let list = "<ul>";
    authors.forEach((author) => {
      list += `<li>${author.getemail()} ${author.getlastName()} ${author.getid()} ${author.getfirstName()}</li>`;
    });
    list += "</ul>";
    return list;
  }
}
