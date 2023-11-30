import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LightboxModule } from "ngx-lightbox";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { Zadanie5Component } from "./zadanie5/zadanie5.component";
import { Zadanie7Component } from "./zadanie7/zadanie7.component";
import { Zadanie9Component } from "./zadanie9/zadanie9.component";
import { Komponent1Component } from './zadanie12/komponent1/komponent1.component';
import { Komponent2Component } from './zadanie12/komponent2/komponent2.component';
import { Komp1Component } from './zadanie14/komp1/komp1.component';
import { Komp2Component } from './zadanie14/komp2/komp2.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    Zadanie5Component,
    Zadanie7Component,
    Zadanie9Component,
    Komponent1Component,
    Komponent2Component,
    Komp1Component,
    Komp2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, LightboxModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
