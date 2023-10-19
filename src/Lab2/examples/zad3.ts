
import { from } from "rxjs";
import { map,reduce,filter } from "rxjs/operators";

export function calculateSelectedSum() {
    var array1 = from([1,2,3,4,5,6,7,8,9]);


    let result$ = array1.pipe(filter(a => a > 7))

    let sum$ = result$.pipe(reduce((a,x) => a+x))

    sum$.subscribe((sum)=>{
        const resultElement = document.getElementById('result3');
        if (resultElement) {
            resultElement.innerText = `Suma tylko wybranych : ${sum}`;
        } else {
            console.error("Nie znaleziono elementu");
        }
    })

}