import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Zadanie25Service } from '../services/zadanie25-service.service';

@Component({
  selector: 'app-zadanie26p1',
  templateUrl: 'zadanie26p1.component.html',
  styleUrls: [
  ]
})
export class Zadanie26p1Component {
  
  value$: Observable<number>;
 
  constructor (zadanie25Service: Zadanie25Service) {
    this.value$ = zadanie25Service.value$;
  }

  ngOnInit() {

  }
}
