import { zad1 } from "./Lab2/zad1";
import { zad2 } from "./Lab2/zad1";
import { zad3 } from "./Lab2/zad1";
import { numbers } from "./Lab2/zad1";
import { strings } from "./Lab2/zad1";
//import { greaterThen } from "./Lab2/zad1";
import { zad5 } from "./Lab2/zad1";
import { zad6 } from "./Lab2/zad1";
import { fromEvent } from "rxjs";
import { ClickObserver } from "./Lab2/clickObserver";



console.log(zad1(numbers));
console.log(zad2(numbers));
//greaterThen();
console.log(zad3(numbers, 4));
console.log(zad5(numbers, 4, 5));
console.log(zad6(strings));

let element = document!.querySelector<HTMLButtonElement>("#button");
if (element){
    fromEvent(element, "click")!.subscribe(new ClickObserver("info1"));
}






