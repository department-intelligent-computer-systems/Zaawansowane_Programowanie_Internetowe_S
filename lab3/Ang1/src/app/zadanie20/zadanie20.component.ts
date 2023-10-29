import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie20',
  templateUrl: 'zadanie20.component.html',
  styleUrls: [ 'zadanie20.component.css'
  ]
})
export class Zadanie20Component {
  inputValue : string;

  updateParagraph() {
    // Nic nie musimy robić, ponieważ [(ngModel)] automatycznie aktualizuje `inputText`
  }

  constructor() {
    
  }

  ngOnInit() {

  }

}
