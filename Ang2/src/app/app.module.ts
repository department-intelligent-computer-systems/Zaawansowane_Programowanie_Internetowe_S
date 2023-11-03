import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { Zadanie1Component } from './zadanie1/zadanie1.component';
import { Zadanie5Component } from './zadanie5/zadanie5.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    Zadanie1Component,
    Zadanie5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
