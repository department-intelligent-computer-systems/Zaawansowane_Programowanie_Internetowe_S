import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { Zadanie5Component } from "./zadanie5/zadanie5.component";
import { Zadanie7Component } from "./zadanie7/zadanie7.component";
import { Zadanie9Component } from "./zadanie9/zadanie9.component";
import { Komponent1Component } from "./zadanie12/komponent1/komponent1.component";
import { Komp1Component } from "./zadanie14/komp1/komp1.component";
const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "zadanie5", component: Zadanie5Component },
  { path: "zadanie7", component: Zadanie7Component },
  { path: "zadanie9", component: Zadanie9Component },
  { path: "zadanie12", component: Komponent1Component },
  { path: "zadanie14", component: Komp1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
