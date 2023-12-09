import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaComponent } from './Komponenty/lista/lista.component';
import { DodawanieComponent } from './Komponenty/dodawanie/dodawanie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DodawanieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
