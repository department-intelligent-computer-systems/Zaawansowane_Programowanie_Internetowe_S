import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css']
})

export class FirstComponent implements OnInit {

  // h1Class? : string;
  h1Class : {};
  title: string = "Pierwsza wartość przekazana z komponentu";

  person = {
    firstName: "Ala",
    lastName: "Nowak"
  };

  style = {"font-size.px":12, "color":"red" }

  constructor() { }

  ngOnInit() {}

  method() {
    return "Wartość zwrócona z metody";
  }

  onClick() {
    this.title = "Po kliknieciu";
    // this.h1Class = "klikniety";
    this.h1Class = {"selected":true, "clicked":false};
  }
}
