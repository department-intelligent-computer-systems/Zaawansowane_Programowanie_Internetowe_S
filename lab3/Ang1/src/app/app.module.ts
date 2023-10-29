import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { Zadanie5Component } from './zadanie5/zadanie5.component';
import { Zadanie8Component } from './zadanie8/zadanie8.component';
import { Zadanie9Component } from './zadanie9/zadanie9.component';
import { Zadanie16Component } from './zadanie16/zadanie16.component';
import { Zadanie16p1Component } from './zadanie16p1/zadanie16p1.component';
import { Zadanie20Component } from './zadanie20/zadanie20.component';
import { Zadanie21Component } from './zadanie21/zadanie21.component';
import { Zadanie21p1Component } from './zadanie21p1/zadanie21p1.component';
import { Zadanie25Component } from './zadanie25/zadanie25.component';
import { Zadanie25Service } from './services/zadanie25-service.service';
import { Zadanie26p1Component } from './zadanie26p1/zadanie26p1.component';
import { Zadanie26p2Component } from './zadanie26p2/zadanie26p2.component';
import { Zadanie26Component } from './zadanie26/zadanie26.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    Zadanie5Component,
    Zadanie8Component,
    Zadanie9Component,
    Zadanie16Component,
    Zadanie16p1Component,
    Zadanie20Component,
    Zadanie21Component,
    Zadanie21p1Component,
    Zadanie25Component,
    Zadanie26p1Component,
    Zadanie26p2Component,
    Zadanie26Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [Zadanie25Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
