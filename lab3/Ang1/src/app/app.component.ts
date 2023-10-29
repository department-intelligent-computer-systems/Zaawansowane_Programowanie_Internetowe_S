import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">Moja fajna strona</a>
  </div>
  </nav>
  <div class="conteiner-fluid">
  <div class="row">

  <router-outlet></router-outlet>
  <button class="btn btn-primary col-2 m-2 " [routerLink]="['/zadanie1']">zadanie 1</button>
  <button class="btn btn-primary col-2 m-2 " [routerLink]="['/zadanie5']">zadanie 5</button>
  <button class="btn btn-primary col-2 m-2 " [routerLink]="['/zadanie8']">zadanie 8</button>
  <button class="btn btn-primary col-2 m-2" [routerLink]="['/zadanie9']">zadanie 9</button>
  <button class="btn btn-primary col-2 m-2" [routerLink]="['/zadanie16']">zadanie 16</button>
  <button class="btn btn-primary col-2 m-2" [routerLink]="['/zadanie20']">zadanie 20</button>
  <button class="btn btn-primary col-2 m-2" [routerLink]="['/zadanie21']">zadanie 21</button>
  <button class="btn btn-primary col-2 m-2" [routerLink]="['/zadanie25']">zadanie 25</button>
  <button class="btn btn-primary col-2 m-2" [routerLink]="['/zadanie26']">zadanie 26</button>
  
  </div>
  </div>`,
  styles: []
})
export class AppComponent {
  title = 'Ang1';
}
