import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-first></app-first>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Moja fajna strona</a>
      </div>
    </nav>
    <div class="conteiner-fluid">
      <div class="row">
        <app-example></app-example>
      </div>
    </div>
  
  `,
  styles: []
})
export class AppComponent {
  title = 'Ang1';
}
