import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-second-component",
  template: `
    <p>second-component works!</p>
    <button (click)="sendDataToParent()">< zamknij/button></button>
  `,
  styles: [],
})
export class SecondComponentComponent {
  @Output() childDataEmitter: EventEmitter<string> = new EventEmitter();

  sendDataToParent() {
    this.childDataEmitter.emit("zamknij");
  }
}
