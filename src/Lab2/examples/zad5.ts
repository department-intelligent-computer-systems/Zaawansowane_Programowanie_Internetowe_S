import { from } from "rxjs";
import { filter } from "rxjs/operators";

function greaterThen(y: number) {
    return (x: number) => x > y;
}

const curry2 = (fn: (x: number) => boolean) => (arr: number) => fn(arr);

export function calculateGreaterThenCurryingSum() {
    var array1 = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    let isGreaterThan3 = greaterThen(3);
    let curryFilter = curry2(isGreaterThan3);

    let sum$ = array1.pipe(filter(curryFilter));

    sum$.subscribe((sum) => {
        const resultElement = document.getElementById('result5');
        if (resultElement) {
            resultElement.innerText = `Suma tylko wybranych z funkcją greaterThen (currying): ${sum}`;
        } else {
            console.error("Nie znaleziono elementu");
        }
    });
}