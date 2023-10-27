import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: `first.component.html`,
  styleUrls: ['first.component.css']
})

export class FirstComponent implements OnInit {
    
    h1Class? :{};
    
    title: string = "Pierwsza wartość przekazana przez komponent";
    person={
      firstname: "Ala",
      lastname: 'Nowak'
    }
    constructor () {}
    ngOnInit(): void {}

    method(){
      return "wartość zwrócona"
    }

    onClick(){
      this.title = "Po kliknięciu";
      this.h1Class = {"kliknieta":true, "niekliknieta":true};
      
      
    }
    tosmall(){
      this.h1Class = {"kliknieta":true, "niekliknieta":false};
    }
}
