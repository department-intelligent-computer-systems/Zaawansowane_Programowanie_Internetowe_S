import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-second-a",
  template: `
    <div>
      <p>Czy chcesz dalej uczyć się frameworka Angular?</p>
      <button (click)="handleYesClick()">Tak</button>
      <button (click)="handleNoClick()">Nie</button>
    </div>
  `,
  styles: [],
})
export class SecondAComponent {
  @Output() yesClicked = new EventEmitter<void>();
  @Output() noClicked = new EventEmitter<void>();

  handleYesClick() {
    this.yesClicked.emit();
  }

  handleNoClick() {
    this.noClicked.emit();
  }
}
