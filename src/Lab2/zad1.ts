
import { from } from "rxjs";
import { map, reduce } from "rxjs/operators";

export function calcSum() {
    var array = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    let result = array.pipe(reduce((a, x) => a + x))

    result.subscribe((sum)=>{
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerText = `Suma: ${sum}`;
        } else {
            console.error("Nie znaleziono elementu");
        }
    })
}