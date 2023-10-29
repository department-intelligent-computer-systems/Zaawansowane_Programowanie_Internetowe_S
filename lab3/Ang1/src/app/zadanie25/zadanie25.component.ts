import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Zadanie25Service } from '../services/zadanie25-service.service';

@Component({
  selector: 'app-zadanie25',
  templateUrl: 'zadanie25.component.html',
  styleUrls: [ 'zadanie25.component.css'
  ]
})
export class Zadanie25Component {
  
  value$: Observable<number>;
  zadanie25Service : Zadanie25Service;

  constructor (zadanie25Service: Zadanie25Service) {
    this.zadanie25Service = zadanie25Service;
    this.value$ = zadanie25Service.value$;
  }

  ngOnInit() {

  }

  changeValue(valueToChange: number, decision: boolean) {
    this.zadanie25Service.changeValue(valueToChange, decision);
  }

}
