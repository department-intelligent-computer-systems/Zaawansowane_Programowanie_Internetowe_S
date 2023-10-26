import { fromEvent, combineLatest} from "rxjs";
import {filter, map, startWith} from 'rxjs/operators';

class App{
    private Input: HTMLInputElement;
    private Output: HTMLParagraphElement;
    private Number: HTMLInputElement
    constructor(){
        this.Input = document.querySelector('#Input') as HTMLInputElement;
        this.Output = document.querySelector('#Output') as HTMLParagraphElement;
        this.Number = document.querySelector('#Number') as HTMLInputElement;
    }
    /*Zadania 12 i 13
    public Init(): void{
        fromEvent(this.Input, 'input')
        .pipe(
            map((e: Event) => (e.target as HTMLInputElement).value),
            filter((value: string) => value.length > 5),
        )
        .subscribe((value: string) => {
            this.Output.innerText = value;
        });
    }*/
    public Init(): void{    
        const inputValue = fromEvent(this.Input, 'input').pipe(
            map((event: Event) => (event.target as HTMLInputElement).value),
            startWith('')
        );
        const Number = fromEvent(this.Number, 'input').pipe(
            map((event: Event) => (event.target as HTMLInputElement).valueAsNumber),
            startWith(0)
        );
        combineLatest([inputValue, Number])
            .pipe(
                map(([value, threshold]) => ({ value, threshold })),
                filter(({ value, threshold }) => isNaN(threshold) || value.length > threshold)
            )
            .subscribe(({ value }) => {
                this.Output.innerText = value;
            });
    }
}
let app = new App();
app.Init();
