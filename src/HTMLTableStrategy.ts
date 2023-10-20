import { DataRetrievalStrategy } from "./Author";
import Author from "./Author";

export class HTMLTableStrategy implements DataRetrievalStrategy {
  retrieveData(authors: Author[]): string {
    let table =
      "<table><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th></tr>";
    authors.forEach((author) => {
      table += `<tr><td>${author.getid()}</td><td>${author.getfirstName()}</td><td>${author.getlastName()}</td><td>${author.getemail()}</td></tr>`;
    });
    table += "</table>";
    return table;
  }
}
