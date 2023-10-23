import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css'
  ]
})
export class FirstComponent implements OnInit {
  title: string = "Pierwsza wartość przekazana z komponentu";

  constructor() { }
  ngOnInit(): void { }

  method() {
    return "Wartość zwrócona z metody";
    }

  onClick() {
    this.title = "Po kliknieciu";
    }
}
