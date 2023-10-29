import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Zadanie5Component } from './zadanie5/zadanie5.component'; 
import { Zadanie8Component } from './zadanie8/zadanie8.component'; 
import { Zadanie9Component } from './zadanie9/zadanie9.component'; 
import { Zadanie16Component } from './zadanie16/zadanie16.component'; 
import { Zadanie20Component } from './zadanie20/zadanie20.component'; 
import { Zadanie21Component } from './zadanie21/zadanie21.component'; 
import { Zadanie25Component } from './zadanie25/zadanie25.component'; 
import { FirstComponent } from './first/first.component';
import { Zadanie26Component } from './zadanie26/zadanie26.component';



const routes: Routes = [
  { path: "zadanie1", component: FirstComponent},
  { path: "zadanie5", component: Zadanie5Component},
  { path: "zadanie8", component: Zadanie8Component},
  { path: "zadanie9", component: Zadanie9Component},
  { path: "zadanie16", component: Zadanie16Component},
  { path: "zadanie20", component: Zadanie20Component},
  { path: "zadanie21", component: Zadanie21Component},
  { path: "zadanie25", component: Zadanie25Component},
  { path: "zadanie26", component: Zadanie26Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
