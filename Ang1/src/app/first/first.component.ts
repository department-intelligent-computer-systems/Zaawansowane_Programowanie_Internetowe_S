import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p *ngIf="showName">
      {{fullName}}
    </p>
    <button (click)="showFullName()">Show</button>
    <button>button1</button>
    <button>button2</button>
  `,
  styles: [
  ]
})
export class FirstComponent {
  fullName: string = "Sebastian W";
  showName: boolean = false;

  showFullName() {
    this.showName = true;
  }
}
