import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zadanie21p1',
  template: `
    <div class="card">
      <div class="card-header">
        <p>{{link.name}}</p>
      </div>
      <div class="card-body">
      <form (ngSubmit)="onEditClick()">
        <input type="text" [(ngModel)] = "editedName" name="editedName">
        <input type="text" [(ngModel)] = "editedUrl" name="editedUrl">
        <button type="submit">Edytuj</button>
      </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Zadanie21p1Component {
  @Input() link: { name: string, url: string, color: string };
  @Output() edit = new EventEmitter<{linkNameToEdit: string, linkUrlToEdit: string }>();

  editedName: string;
  editedUrl: string;

  ngOnInit() {
    this.editedName = this.link.name;
    this.editedUrl = this.link.url;
  }

  onEditClick() {
    const editedData = {
      linkNameToEdit: this.editedName,
      linkUrlToEdit: this.editedUrl,
    };
    this.edit.emit(editedData);
  }
}
