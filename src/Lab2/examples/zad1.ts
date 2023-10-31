
import { from } from "rxjs";
import { map,reduce } from "rxjs/operators";

export function calculateSum() {
    var array1 = from([1,2,3,4,5,6,7,8,9]);


    let result = array1.pipe(reduce((a,x) => a+x));

    result.subscribe((sum)=>{
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerText = `Suma: ${sum}`;
        } else {
            console.error("Nie znaleziono elementu");
        }
    })

}
