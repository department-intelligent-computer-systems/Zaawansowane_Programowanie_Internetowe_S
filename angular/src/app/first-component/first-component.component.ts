import { Component } from "@angular/core";

@Component({
  selector: "app-first-component",
  template: `<button (click)="showSecondComponent()">
      Pokaż drugi kompXDonent
    </button>
    <app-second-component
      *ngIf="showSecond"
      (childDataEmitter)="receiveDataFromChild($event)"
    ></app-second-component>`,
  styles: [],
})
export class FirstComponentComponent {
  showSecond: boolean = false;

  receiveDataFromChild(data: string) {
    if (data === "zamknij") {
      this.showSecond = false;
    }
  }

  showSecondComponent() {
    this.showSecond = true;
  }
}
