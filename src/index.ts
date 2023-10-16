import { ButtonCounter } from "./Zad4/ButtonCounter";
import { AuthorApp } from "./Zad5/AuthorApp";
function initialize() {
    const app = new ButtonCounter();
}
window.addEventListener('load',initialize);

    const app = new AuthorApp();
    app.run();


function hello() {
    console.log("Witaj w swiecie Typescript.")
}

hello();
