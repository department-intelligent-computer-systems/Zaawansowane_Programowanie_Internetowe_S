
import { from } from "rxjs";
import { map,reduce,filter } from "rxjs/operators";

export function calculateEvenSum() {
    var array1 = from([1,2,3,4,5,6,7,8,9]);


    let result$ = array1.pipe(filter(a => a % 2 == 0))

    let sum$ = result$.pipe(reduce((a,x) => a+x))

    sum$.subscribe((sum)=>{
        const resultElement = document.getElementById('result2');
        if (resultElement) {
            resultElement.innerText = `Suma tylko parzystych : ${sum}`;
        } else {
            console.error("Nie znaleziono elementu");
        }
    })

}