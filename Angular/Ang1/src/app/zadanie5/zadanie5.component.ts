import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zadanie5",
  templateUrl: "./zadanie5.component.html",
  styleUrls: ["./zadanie5.component.css"],
})
export class Zadanie5Component implements OnInit {
  paragraphTitle: string = "Moje linki";
  constructor() {}

  ngOnInit(): void {}

  links = [
    { name: "PCZ", url: "https://moodle2022.pcz.pl", backgroundColor: "red" },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      backgroundColor: "blue",
    },
    {
      name: "MeczykiPL",
      url: "https://www.meczyki.pl",
      backgroundColor: "green",
    },
    { name: "Allegro", url: "https://allegro.pl", backgroundColor: "orange" },
    {
      name: "Aliexpress",
      url: "https://www.wish.com/pl",
      backgroundColor: "blue",
    },
  ];

  onClickChangeColor() {
    this.links.forEach((item) => {
      if (item.backgroundColor !== "black") {
        item.backgroundColor = "yellow";
      }
    });
  }

  //zad6
  onClickChangeColorOne() {
    this.links.find((element) => {
      if (element.name === "PCZ") {
        element.backgroundColor = "purple";
      }
    });
  }
}
