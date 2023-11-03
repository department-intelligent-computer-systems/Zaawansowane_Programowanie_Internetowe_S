import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<app-first-component></app-first-component> <app-second-component></app-second-component> <app-thumbnail-list></app-thumbnail-list> <app-photo-details></app-photo-details>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularapp';
  
}
