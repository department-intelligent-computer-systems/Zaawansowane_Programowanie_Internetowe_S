import { fromEvent, Subject } from "rxjs";
import {scan, tap,map,take, takeUntil} from 'rxjs/operators'


export class Zadanie7 {
    private counter: number = 0;
    private destroy$: Subject<void> = new Subject<void>();

    constructor(private button: string, private paragraph:string,private buttonActivate:string,private buttonDeactivate:string,private buttonCounter:string,private secondParagraph:string, private input1:string,private input2:string) {
        this.setup();
    }

    private setup(): void {
        const button = document.getElementById(this.button);
        const paragraph = document.getElementById(this.paragraph);

        const buttonActivate = document.getElementById(this.buttonActivate);
        const buttonDeactivate = document.getElementById(this.buttonDeactivate);
        const buttonCounter = document.getElementById(this.buttonCounter);

        //Zad.11
        const secondParagraph = document.getElementById(this.secondParagraph);

        const input1 = <HTMLInputElement>document.getElementById(this.input1);
        const input2 = <HTMLInputElement>document.getElementById(this.input2);

        // if(button && paragraph && buttonActivate && buttonDeactivate && buttonCounter) {
        //     const clicks = fromEvent(button,'click');

        //     clicks.pipe(
        //         //Zad 7
        //         //tap(() => this.counter++),
        //         //Zad 8
        //         map(() => 1),
        //         scan((acc) => acc + 1, 0),
        //         //Zad 9
        //         take((5))
        //     ).subscribe((count) => {
        //         paragraph.textContent = `Liczba kliknięć: ${count}`
        //     })
        // }

        //Zad 10
        if(button && paragraph && buttonActivate && buttonDeactivate && buttonCounter && secondParagraph) {
            const clicks = fromEvent(button,'click');

            const activateClicks = fromEvent(buttonActivate,'click');
            const deactivateClicks = fromEvent(buttonDeactivate,'click');
            const countClicks = fromEvent(buttonCounter,'click');

            activateClicks.subscribe(() => {
                countClicks.pipe(
                    map(() => 1),
                    scan((acc) => acc + 1,0),
                    takeUntil(deactivateClicks) //deaktywacja subskrypcji po kliknięciu przycisku dezaktywacji
                ).subscribe((count) => {
                    paragraph.textContent = `Liczba kliknięć: ${count}`;
                })
            });

            activateClicks.pipe(
                map(() => 1),
                scan((acc) => acc + 1,0)
            ).subscribe((howmany) => {
                secondParagraph.textContent = `Ile wciśnięto Przycisk2 Aktywacja: ${howmany}`;
            });

            deactivateClicks.pipe(
                map(() => 1),
                scan((acc) => acc + 1,0)
            ).subscribe((count) => {
                input1.value = `${count}`; 
            })

            deactivateClicks.pipe(
                map(() => 1),
                scan((acc) => acc + 1,0)
            ).subscribe((count) => {
                input2.value = `${count}`; 
            })

            deactivateClicks.subscribe(() => {
                this.destroy$.next();
                this.destroy$.complete();
            })
        }
    }
}