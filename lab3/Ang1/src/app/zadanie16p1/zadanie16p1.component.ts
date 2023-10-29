import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zadanie16p1',
  template: `
    <div class="card">
      <div class="card-header">
        <p>{{link.name}}</p>
      </div>
      <div class="card-body">
        <button (click)="onDeleteClick()">Usuń</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Zadanie16p1Component {
  @Input() link: { name: string, url : string, color: string}
  @Output() delete = new EventEmitter<void>();
  
  onDeleteClick() {
    this.delete.emit();
  }
}
