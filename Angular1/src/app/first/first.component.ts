import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent implements OnInit {
  title: string = "Pierwsza wartosc przekazana z komponentu";
  style = { "font-size.px": 12, color: "red" };
  ngOnInit() {}
  method() {
    return "Wartosc zwrocona z metody";
  }
  onClick() {
    this.title = "Po kliknieciu";
  }
}
