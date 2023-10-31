import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "first.component.html",
  styleUrls: ["first.component.css"],
})
export class FirstComponent implements OnInit {
  pClass = {};
  title: string = "Wartosc 1";
  text: string = "Tekst Normalny";

  isLargeText: boolean = false;
  isColorAndStrikeThrough: boolean = false;
  constructor() {}

  person = {
    name: "",
    lastName: "",
  };

  ngOnInit(): void {}

  method() {
    return "Zwracam wartosc";
  }

  onClick() {
    this.person.name = "Adrian";
    this.person.lastName = "Adamczyk";
  }

  clickText1() {
    this.isLargeText = !this.isLargeText;
  }

  clickText2() {
    this.isColorAndStrikeThrough = !this.isColorAndStrikeThrough;
  }
  bothEffects() {
    this.clickText1();
    this.clickText2();
  }
}
