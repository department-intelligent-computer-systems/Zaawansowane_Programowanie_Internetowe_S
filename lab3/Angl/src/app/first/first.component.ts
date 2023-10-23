import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css']
})
export class FirstComponent implements OnInit{

  title: string = "Pierwsza wartosc przekazana z komponentu";
  h1Class? : string;
  h1ColorStyle : string = "yellow";

  constructor() {}
  ngOnInit(): void {  }

  method(){
    return "Wartosc zwrocona z metody";
  }

  onClick(){
    this.title = "po kliknieciu";
    this.h1Class = "klikniety";
  }
}
