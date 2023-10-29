import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie8',
  templateUrl: 'zadanie8.component.html',
  styleUrls: [ 'zadanie8.component.css'
  ]
})
export class Zadanie8Component {
  value: number = 0;

  constructor () {

  }

  ngOnInit() {

  }

  changeValue(valueToChange: number, decision: boolean) {
    if(decision === true) {
      this.value = this.value + valueToChange;
    } else {
      this.value = this.value - valueToChange;
    }
  }

}
