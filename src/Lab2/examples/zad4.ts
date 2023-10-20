
import { from } from "rxjs";
import { map,reduce,filter } from "rxjs/operators";

function greaterThen(y:number) {
    return (x) => x > y;
}


export function calculateGreaterThenSum() {
    var array1 = from([1,2,3,4,5,6,7,8,9]);


    let result$ = array1.pipe(filter(greaterThen(3)))

    let sum$ = result$.pipe(reduce((a,x) => a+x))

    sum$.subscribe((sum)=>{
        const resultElement = document.getElementById('result4');
        if (resultElement) {
            resultElement.innerText = `Suma tylko wybranych z funkcją greaterThen: ${sum}`;
        } else {
            console.error("Nie znaleziono elementu");
        }
    })

}