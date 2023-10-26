import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html' ,
  styleUrls: [ 'first.component.css' 
  ]
})
export class FirstComponent implements OnInit {

  pClass = {"size":true,"color":true,"text-decoration":true};
  title:string = "Wartosc 1";
  text:string = "Tekst Normalny";
  constructor() {}

  person =  {
    name: "",
    lastName: ""
  }

  ngOnInit(): void {
    
  }

  method() {
    return "Zwracam wartosc";
  }

  onClick() {
    this.person.name = "Adrian";
    this.person.lastName = "Adamczyk";
  }

  clickText1() {
    this.pClass['size'] = !this.pClass['size'];
  }

  clickText2() {
    this.pClass['color'] = !this.pClass['color'];
    this.pClass['text-decoration'] = !this.pClass['text-decoration'];
  }
}
