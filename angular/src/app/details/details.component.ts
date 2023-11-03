import { Component, Input } from "@angular/core";

@Component({
  selector: "app-details",
  template: `
    <div *ngIf="selectedPage">
      <h2>{{ selectedPage.title }}</h2>
      <p>{{ selectedPage.opis }}</p>
    </div>
  `,
  styles: [],
})
export class DetailsComponent {
  @Input() selectedPage: any;
}
