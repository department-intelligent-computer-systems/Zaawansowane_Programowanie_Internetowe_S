import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zadanie7",
  templateUrl: "./zadanie7.component.html",
  styleUrls: ["./zadanie7.component.css"],
})
export class Zadanie7Component implements OnInit {
  counter: number = 0;

  ngOnInit(): void {}

  addCounterFunction() {
    this.counter++;
  }

  subCounterFunction() {
    this.counter--;
  }

  //zad8
  incDecby2Func(value: number) {
    this.counter += value;
  }
}
