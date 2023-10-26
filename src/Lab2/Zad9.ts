import { fromEvent } from 'rxjs';
import { map, scan, startWith, take } from 'rxjs/operators';

export class ReactiveApp3 {
    constructor(private button: HTMLButtonElement) {
        fromEvent(button, 'click')
            .pipe(
                map(() => 1),
                startWith(0),
                scan((acc, value) => acc + value),
                take(5)
            )
            .subscribe(count => console.log('Liczba kliknięć:' + count));
    }
}