import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { Zad1Component } from './zad1/zad1.component';
import { LinkiComponent } from './linki/linki.component';
import { KlikComponent } from './klik/klik.component';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    Zad1Component,
    LinkiComponent,
    KlikComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
