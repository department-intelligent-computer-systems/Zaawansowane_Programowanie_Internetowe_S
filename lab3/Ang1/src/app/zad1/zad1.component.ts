import { Component } from '@angular/core';

@Component({
  selector: 'app-zad1',
  templateUrl:'zad1.component.html',
  styleUrls: ['zad1.component.css']
})
export class Zad1Component {
  msg:string="";
  isGreen:boolean=false;
  isBig:boolean=false;

  shwoMsg(){
    this.msg="Fajny tekst"
  }

  bigText(){
    this.isBig = !this.isBig;
  }
  greenTxt(){
    this.isGreen=!this.isGreen;
  }

}
