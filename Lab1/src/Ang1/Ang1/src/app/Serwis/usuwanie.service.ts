import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/Student';
import { BehaviorSubject } from 'rxjs';
import { WybieranieService } from './wybieranie.service';
import { WyswietlanieService } from './wyswietlanie.service';

@Injectable({
  providedIn: 'root'
})
export class UsuwanieService {
 // wybrany student typu każdego
  student:any;
// Lista studentow jako obiekt obserwowalny
  list:Observable<Student[]>;
// Nowa lista studentow 
  ListaStudentow = new BehaviorSubject<Student[]>([]);

  constructor(public wybranySerwis:WybieranieService, public wyswietlanySerwis:WyswietlanieService) {
    //Tak samo jak przy wybieraniu, wybrany student
    this.student = this.wybranySerwis.wybrany$;

    this.list = this.wyswietlanySerwis.listaStudentow$;
    this.list.subscribe(this.ListaStudentow)
   }

   deleteStudent(student:Student){
    // filtrowanie tablicy studentow i tworzenie nowej bez wybranego wczesniej
    this.wyswietlanySerwis.listaStudentow.next(this.ListaStudentow.value.filter(e => e.id !== student.id));
    // Chyba usuwanie studenta o podanym id
    this.wybranySerwis.student.next(this.student);
   }
}
