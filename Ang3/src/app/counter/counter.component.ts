import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css'
  ]
})
export class CounterComponent {
  counterValue: number = 0;
  step: number = 1; // Domyślna wartość kroku

  setStep(newStep: number) {
    this.step = newStep;
  }

  changeValue(increase: boolean) {
    if (increase) {
      this.counterValue += this.step;
    } else {
      this.counterValue -= this.step;
    }
  }
}
