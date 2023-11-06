import {JSONDisplay} from './classes/JSONDisplay';
import { ListHTMLDisplay } from './classes/ListHTMLDisplay';
import { Author } from './classes/Author';
import { CounterApp } from './app/CounterApp';
import { TableHTMLDisplay } from './classes/TableHTMLDisplay';

const authors: Author[] = [
    new Author("Jan", "Kowalski", "przykladowymail@gmail.com")
];

const zadanie3 = () =>{
    const tableHTMLDisplayAuthors = new TableHTMLDisplay(authors);
    const jsonDisplayAuthors = new JSONDisplay(authors);
    const listHTMLDisplayAuthors = new ListHTMLDisplay(authors);

    console.log(tableHTMLDisplayAuthors.display());
    console.log(jsonDisplayAuthors.display());
    console.log(listHTMLDisplayAuthors.display());
}
zadanie3();

window.addEventListener('load', ()=>{
    const app = new CounterApp(0);
});


