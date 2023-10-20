import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

export class ClickCounterApp {
  private clickCount = 0;

  constructor() {
    const button:HTMLElement = document.querySelector('#clickButton') as HTMLElement;
    const clickObservable = fromEvent(button, 'click');

    clickObservable
      .pipe(
        tap(() => {
          this.clickCount++;
          this.updateDisplay();
        })
      )
      .subscribe();
  }

  private updateDisplay() {
    const display = document.getElementById('clickCount');
    display!.textContent = `Liczba kliknięć: ${this.clickCount}`;
  }
}