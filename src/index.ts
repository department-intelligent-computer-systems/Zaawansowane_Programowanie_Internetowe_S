import { ReactiveApp } from "./Lab2/Zad7";
import { ButtonCounter } from "./Zad4/ButtonCounter";
import { AuthorApp } from "./Zad5/AuthorApp";
import { result1 } from "./Lab2/zad1";
import { result2 } from "./Lab2/Zad2";
import { ReactiveApp2 } from "./Lab2/Zad8";
import { ReactiveApp3 } from "./Lab2/Zad9";
import { ReactiveApp4 } from "./Lab2/Zad10";
import { result3 } from "./Lab2/Zad3";
import { result4 } from "./Lab2/Zad4";
import { result5 } from "./Lab2/Zad5";
import { sum } from "./Lab2/Zad6";
function initialize() {
    const app = new ButtonCounter();
}
window.addEventListener('load', initialize);

const app = new AuthorApp();
app.run();

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

if (button1 instanceof HTMLButtonElement && button2 instanceof HTMLButtonElement && button3 instanceof HTMLButtonElement) {
    const reactiveApp = new ReactiveApp(button1);
}
if (button1 instanceof HTMLButtonElement && button2 instanceof HTMLButtonElement && button3 instanceof HTMLButtonElement) {
    const reactiveApp2 = new ReactiveApp2(button1);
}
if (button1 instanceof HTMLButtonElement && button2 instanceof HTMLButtonElement && button3 instanceof HTMLButtonElement) {
    const reactiveApp3 = new ReactiveApp3(button1);
}
if (button1 instanceof HTMLButtonElement && button2 instanceof HTMLButtonElement && button3 instanceof HTMLButtonElement) {
    const reactiveApp4 = new ReactiveApp4(button1, button2, button3);
}

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(sum);



