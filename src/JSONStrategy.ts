import Author, { DataRetrievalStrategy } from "./Author";

export class JSONStrategy implements DataRetrievalStrategy {
  retrieveData(authors: Author[]): string {
    const jsonData = authors.map((author) => {
      return {
        id: author.getid(),
        firstName: author.getfirstName(),
        lastName: author.getlastName(),
        email: author.getemail(),
      };
    });
    return JSON.stringify(jsonData);
  }
}
