import { fromEvent, Subscription } from 'rxjs';
import { tap, map, scan, take } from 'rxjs/operators';
/*
ZADANIE 7 

RXJS

Napisz aplikację obiektowo-reaktywną, która w paragrafie wyświetli ile razy został naciśnięty przycisk.
Klasa powinna zawierać pole, które będzie przechowywać liczbę kliknięć. Można wykorzystać operator
tap, który służy do wprowadzania efektów ubocznych.
*/

// export class ClickCounter {
//     private count = 0;

//     constructor(private button: HTMLButtonElement) {
//         fromEvent(button, 'click')
//             .pipe(
//                 tap(() => {
//                     this.count++;
//                     console.log('CLICKED!:' + this.count);
//                 })
//             )
//             .subscribe();
//     }
// }

/* 
ZADANIE 8 

Zmodyfikuj poprzenie zadanie tak aby nie trzeba było korzystać z dodatkowego pola. Można zastosować
operatory map i scan.
*/
// export class ClickCounter {
//     constructor(private button: HTMLButtonElement) {
//         fromEvent(button, 'click')
//             .pipe(
//                 map(() => 1),
//                 scan((acc, curr) => acc + curr, 0)
//             )
//             .subscribe(count => console.log('CLICKED!:' + count));
//     }
// }

/* 
ZADANIE 9

Zmodyfikuj poprzednie zadanie tak aby przycisk można było kliknać przycisk maksymalnie 5 razy (można
do tego wykorzystać operator take)
*/

// export class ClickCounter {
//     constructor(private button: HTMLButtonElement) {
//         fromEvent(button, 'click')
//             .pipe(
//                 map(() => 1),
//                 scan((acc, curr) => acc + curr, 0),
//                 take(5)
//             )
//             .subscribe(count => console.log('CLICKED!:' + count));
//     }
// }

/* ZADANIE 10 

Zmodyfikuj poprzednie zadanie tak aby na stronie były 3 przyciski (pierwszy, który będzie powodował, że
przycisk trzeci zacznie reagować, drugi który spowoduje, że przycisk trzeci przestanie reagować i trzeci,
którego wciśnięcia będziemy zliczać). Można wykorzystać subskrybowanie i odłączenia subskrypcji od
obiektu obserwowanego.
*/

export class ClickCounter {
    private count = 0;
    private subscription: Subscription;

    constructor(private button1: HTMLButtonElement, private button2: HTMLButtonElement, private button3: HTMLButtonElement) {
        this.subscription = fromEvent(button3, 'click')
            .pipe(
                map(() => 1),
                scan((acc, curr) => acc + curr, 0)
            )
            .subscribe(count => console.log('CLICKED!:' + count));

        fromEvent(button1, 'click')
            .subscribe(() => {
                this.subscription = fromEvent(button3, 'click')
                    .pipe(
                        map(() => 1),
                        scan((acc, curr) => acc + curr, 0)
                    )
                    .subscribe(count => console.log('CLICKED!:' + count));
            });

        fromEvent(button2, 'click')
            .subscribe(() => {
                this.subscription.unsubscribe();
            });
    }
}
