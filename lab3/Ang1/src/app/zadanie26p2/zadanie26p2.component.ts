import { Component } from '@angular/core';
import { Zadanie25Service } from '../services/zadanie25-service.service';

@Component({
  selector: 'app-zadanie26p2',
  templateUrl: 'zadanie26p2.component.html',
  styleUrls: [
  ]
})
export class Zadanie26p2Component {
  
  zadanie25Service : Zadanie25Service;

  constructor (zadanie25Service: Zadanie25Service) {
    this.zadanie25Service = zadanie25Service;
  }

  ngOnInit() {

  }

  changeValue(valueToChange: number, decision: boolean) {
    this.zadanie25Service.changeValue(valueToChange, decision);
  }

}
