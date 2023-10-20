import { Buttons } from "./Zad4/Buttons";
import { AuthorList } from "./Zad5/AuthorsList";
import { calculateSum } from "./Lab2/examples/zad1";
import { calculateEvenSum } from "./Lab2/examples/zad2";
import { calculateSelectedSum } from "./Lab2/examples/zad3";
import { calculateGreaterThenSum } from "./Lab2/examples/zad4";
import { calculateGreaterThenCurryingSum } from "./Lab2/examples/zad5";

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
