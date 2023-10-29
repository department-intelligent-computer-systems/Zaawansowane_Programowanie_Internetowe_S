import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Zadanie25Service {

  valueChange : BehaviorSubject<number>;
  value$ : Observable<number>;

  constructor() { 
    this.valueChange = new BehaviorSubject(this.value);
    this.value$ = this.valueChange.asObservable();
  }

  changeValue(valueToChange: number, decision: boolean) {
    if(decision === true) {
      this.value = this.value + valueToChange;
    } else {
      this.value = this.value - valueToChange;
    }
    this.valueChange.next(this.value);
  }

  private value : number = 0;
}
