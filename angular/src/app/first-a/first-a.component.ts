import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-first-a",
  template: `
    <div>
      <ul>
        <li *ngFor="let page of pages" (click)="selectPage(page)">
          {{ page.title }}
        </li>
      </ul>
    </div>
    <app-details [selectedPage]="selectedPage"></app-details>
  `,
  styles: [],
})
export class FirstAComponent {
  pages = [
    { title: "Strona 1", opis: "Opis strony 1" },
    { title: "Strona 2", opis: "Opis strony 2" },
    { title: "Strona 3", opis: "Opis strony 3" },
  ];
  selectedPage: any;

  selectPage(page: any) {
    this.selectedPage = page;
  }
}
