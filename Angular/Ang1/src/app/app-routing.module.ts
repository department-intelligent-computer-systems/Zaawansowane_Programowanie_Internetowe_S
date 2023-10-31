import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { Zadanie5Component } from "./zadanie5/zadanie5.component";
import { Zadanie7Component } from "./zadanie7/zadanie7.component";
import { Zadanie9Component } from "./zadanie9/zadanie9.component";

const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "zadanie5", component: Zadanie5Component },
  { path: "zadanie7", component: Zadanie7Component },
  { path: "zadanie9", component: Zadanie9Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
