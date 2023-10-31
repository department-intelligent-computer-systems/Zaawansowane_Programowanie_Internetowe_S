import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <router-outlet></router-outlet
    ><button [routerLink]="['/first']">First Component</button
    ><button [routerLink]="['/zadanie5']">Zadanie 5</button
    ><button [routerLink]="['/zadanie7']">Zadanie 7</button>
    <button [routerLink]="['/zadanie9']">Zadanie 9</button>`,
  styles: [],
})
export class AppComponent {}
