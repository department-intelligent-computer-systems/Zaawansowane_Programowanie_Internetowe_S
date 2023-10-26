import { Subscription, fromEvent } from "rxjs";
import { scan, map } from "rxjs/operators";

export class ReactiveApp4 {
    private count = 0;
    private subs: Subscription;

    constructor(private button1: HTMLButtonElement, private button2: HTMLButtonElement, private button3: HTMLButtonElement) {
        this.subs = fromEvent(button3, 'click')
            .pipe(
                map(() => 1),
                scan((acc, curr) => acc + curr, 0)
            )
            .subscribe(count => console.log('Liczba kliknięć:' + count));
        fromEvent(button1, 'click')
            .subscribe(() => {
                this.subs = fromEvent(button3, 'click')
                    .pipe(
                        map(() => 1),
                        scan((acc, curr) => acc + curr, 0)
                    )
                    .subscribe(count => console.log('Liczba kliknięć:' + count));
            });
        fromEvent(button2, 'click')
            .subscribe(() => {
                this.subs.unsubscribe();
            });
    }
}