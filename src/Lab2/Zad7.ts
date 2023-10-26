import { fromEvent, tap, scan } from 'rxjs';
export class ReactiveApp {
    clickCount: number = 0;
    constructor(private button: HTMLButtonElement) {
        fromEvent(button, 'click')
            .pipe(
                tap(() => {
                    this.clickCount++;
                    console.log(this.clickCount);
                }),
            )
            .subscribe((count) => {
                const clickCountElement = document.getElementById('clickCount');
                if (clickCountElement) {
                    clickCountElement.textContent = `Liczba kliknięć: ${count}`;
                }
            });

    }
}
//const app = new ReactiveApp();