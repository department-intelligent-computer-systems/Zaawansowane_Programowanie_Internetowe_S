import { fromEvent } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

export class ReactiveApp2 {
    constructor(private button: HTMLButtonElement) {
        fromEvent(button, 'click')
            .pipe(
                map(() => 1),
                startWith(0),
                scan((acc, value) => acc + value)
            )
            .subscribe(count => console.log('Liczba kliknięć:' + count));
    }
}
