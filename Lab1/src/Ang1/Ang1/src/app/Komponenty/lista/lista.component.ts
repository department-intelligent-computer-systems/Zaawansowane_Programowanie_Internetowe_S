import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Model/Student';
import {WyswietlanieService} from 'src/app/Serwis/wyswietlanie.service';
import {WybieranieService} from 'src/app/Serwis/wybieranie.service';
import { UsuwanieService } from '../../Serwis/usuwanie.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  studenci:Observable<Student[]>;
  wybrany:Observable<Student | null>;

  constructor(public wyswietlanieService:WyswietlanieService, public wybieranieService:WybieranieService, public usuwanieService:UsuwanieService) { 
    
    this.studenci = wyswietlanieService.listaStudentow$;
    this.wybrany = wybieranieService.wybrany$;
    
  }
  lista_studentow(s:Student){
    this.wybieranieService.wybierzStudenta(s);
  }
  usuwanie(s:Student){
    this.usuwanieService.deleteStudent(s);
  }
}
