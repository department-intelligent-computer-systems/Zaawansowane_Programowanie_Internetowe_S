import { Injectable } from '@angular/core';
import { Student } from '../Model/Student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WyswietlanieService {

  private student:Student[] = [
    new Student(1, 'Jan', 'Kowalski', 20, 'Informatyka'),
    new Student(2, 'Adam', 'Nowak', 21, 'Informatyka'),
    new Student(3, 'Anna', 'Kowalska', 19, 'Informatyka'),
    new Student(4, 'Katarzyna', 'Nowak', 22, 'Informatyka'),
    new Student(5, 'Piotr', 'Kowalski', 20, 'Informatyka'),
  ];

// sprawdzanie ostatniego stanu listy studentów
  listaStudentow = new BehaviorSubject<Student[]>(this.student);
// zwracanie listy studentów jako obiekt obserwowalny
  get listaStudentow$() {
    return this.listaStudentow.asObservable();
  }
  constructor() { }
}
