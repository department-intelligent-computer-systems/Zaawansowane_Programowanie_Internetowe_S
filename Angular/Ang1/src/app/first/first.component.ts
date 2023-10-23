import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styles: []
})
export class FirstComponent implements OnInit{
  pClass = {"kolor":false,"rozmiar":false};
  title: string = "";
  constructor() { }
  ngOnInit(): void { }
  Name() {
    this.title = "Kamil Wojtania";
    }
  Color(){
    if (this.pClass.kolor===true) {
      this.pClass.kolor = false;
    } else {
      this.pClass.kolor=true;
    }
     }
  Size(){
    if (this.pClass.rozmiar===true) {
      this.pClass.rozmiar = false;
    } else {
      this.pClass.rozmiar =true;
    }
    
  }
}
