import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styles: []
})
export class FirstComponent implements OnInit {
  title:string = ""
  constructor() { }
  ngOnInit(): void { }
  Dane(){
    this.title="Oskar Szewczyk"
  }
}