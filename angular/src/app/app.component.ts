import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-second-test></app-second-test>

    <router-outlet></router-outlet>
    <app-first-component></app-first-component>
    <app-first-a (click)="showSecondComponent()"></app-first-a>
    <app-second-a
      (yesClicked)="handleYesClick()"
      (noClicked)="handleNoClick()"
    ></app-second-a>
    <p>{{ resultMessage }}</p>
  `,
  styles: [],
})
export class AppComponent {
  title = "Ang1";
  isSecondComponentVisible: boolean = false;
  resultMessage: string = "";

  showSecondComponent() {
    this.isSecondComponentVisible = true;
  }

  handleYesClick() {
    this.isSecondComponentVisible = false;
    this.resultMessage = "Ciesz się! Idźmy dalej!";
  }

  handleNoClick() {
    this.isSecondComponentVisible = false;
    this.resultMessage = "Przykro mi, że się męczysz!";
  }
}
