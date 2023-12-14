import { Buttons } from "./Zad4/Buttons";
import { AuthorList } from "./Zad5/AuthorsList";
import { calculateSum } from "./Lab2/examples/zad1";
import { calculateEvenSum } from "./Lab2/examples/zad2";
import { calculateSelectedSum } from "./Lab2/examples/zad3";
import { calculateGreaterThenSum } from "./Lab2/examples/zad4";
import { calculateGreaterThenCurryingSum } from "./Lab2/examples/zad5";
import { sum } from "./Lab2/examples/zad6";
import { Author } from "./classes/Author";
import { Table } from "./htmlTable/Table";
import { List } from "./htmlList/List";
import { DataJson } from "./toJson/dataJson";
import { Zadanie4 } from "./ts-examples/zad4";
import { Zadanie7 } from "./Lab2/examples/zad7";
import { Zadanie12 } from "./Lab2/examples/zad12";

// function initialize() {
//     const app = new Buttons();
// }

// window.addEventListener('load',initialize);

// const app = new AuthorList();
// app.showAuthors();

document.addEventListener('DOMContentLoaded', () => {
    calculateSum();
    calculateEvenSum();
    calculateSelectedSum();
    calculateGreaterThenSum();
    calculateGreaterThenCurryingSum();
})


console.log(sum);


let author1 = new Author("Adam","Mickiewicz","amickiewicz90@onet.pl");
let author2 = new Author("Henryk","Sienkiewicz","hsienkiewicz@wp.pl");
let author3 = new Author("Jolanta","Nowakowska","jnowakowska@gmail.com");
let author4 = new Author("Jerzy","Bronkowski","jbronko@wp.pl");
let author5 = new Author("Alicja","Ptaszkiewicz","aptaszkiewicz@onet.pl");

let authors: Author[] = [author1,author2,author3,author4,author5]

console.log(authors);

let table1 = new Table(authors);
let list1 = new List(authors);
let dataJson1 = new DataJson(authors);

let ob1Zad4 = new Zadanie4(0)


document.addEventListener("DOMContentLoaded", () => {
    table1.show();
    list1.show();
    dataJson1.show();
    ob1Zad4.printValue();
    clickerZad7
    obZad12
})

const clickerZad7 = new Zadanie7('mybutton','valueFinal','buttonActivate','buttonDeactivate','buttonCounter','howmanyValue','input1','input2')
const obZad12 = new Zadanie12('stringInput1','paraInput1');