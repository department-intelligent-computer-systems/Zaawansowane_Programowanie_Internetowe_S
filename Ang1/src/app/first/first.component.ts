import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css']
})
export class FirstComponent implements OnInit{
 
 h1Class: {}; 
 title: string = "Pierwsza wartość przekazana z komponentu";

 person={
  firstName: "Szymon",
  lastName: "Kubik"
 };

  constructor(){ }
 ngOnInit(): void { }

style = {"font-size.px":12, "color":"red" };


 method(){
  return "Wartość zwrócona z metody";
 }

 onClick(){
  this.title = "Po kliknięciu";
  this.h1Class = {"selected":true, "clicked":false};
 }

}
