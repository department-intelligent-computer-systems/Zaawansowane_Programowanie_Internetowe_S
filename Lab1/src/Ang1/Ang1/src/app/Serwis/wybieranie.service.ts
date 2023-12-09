import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../Model/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WybieranieService {
// sprawdzanie ostatniego stanu wybranego studenta
  student = new BehaviorSubject<Student | null>(null);
// zwracanie wybranego studenta jako obiekt obserwowalny
  get wybrany$():Observable<Student | null> {
    return this.student.asObservable();
  }
//funkcja umozliwiacja wybranie studenta z listy
  wybierzStudenta(student:Student) {
    this.student.next(student);
    console.log(this.student);
  }
  constructor() { }
}
