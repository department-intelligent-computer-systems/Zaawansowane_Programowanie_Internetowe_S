import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LightboxModule } from "ngx-lightbox";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { Zadanie5Component } from "./zadanie5/zadanie5.component";
import { Zadanie7Component } from "./zadanie7/zadanie7.component";
import { Zadanie9Component } from "./zadanie9/zadanie9.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    Zadanie5Component,
    Zadanie7Component,
    Zadanie9Component,
  ],
  imports: [BrowserModule, AppRoutingModule, LightboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
