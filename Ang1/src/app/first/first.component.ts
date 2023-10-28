import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styles: []
})

export class FirstComponent implements OnInit {
  h1Class?: {};
  title: string = "Pierwsza wartość przekazana z komponentu";
  person = {
    firstName: "Ala",
    lastName: "Nowak"
  }
  constructor() {}

  ngOnInit(): void {}

  method(){
    return "Wartość zwrócona z metody";
  }
  onClick(){
    this.title = "Po Kliknięciu"
    this.h1Class = {"selected":true, "clicked": false}
  }
}
