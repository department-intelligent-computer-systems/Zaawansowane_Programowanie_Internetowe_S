import {JSONDisplay} from "./models/JSONDisplay";
import { ListHTMLDisplay } from "./models/ListHTMLDisplay";
import { Author } from "./models/Author"
import { CounterApp } from "./apps/CounterApp";
import { AuthorApp } from "./apps/AuthorApp";

const authors: Author[] = [
    new Author("Marcin", "Mierzejwski", "mmierzejwski0113@gmail.com")
  ];



const zadanie3 = () => {
    const jsonDisplayAuthors = new JSONDisplay(authors);
    const listHtmlDisplayAuthors = new ListHTMLDisplay(authors);
    console.log(jsonDisplayAuthors.display());
    console.log(listHtmlDisplayAuthors.display());
}
zadanie3();


window.addEventListener('load', () => {
    const app = new CounterApp(0); // Początkowa wartość licznika

  });
