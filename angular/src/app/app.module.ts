import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SecondTestComponent } from "./second-test/second-test.component";
import { FirstComponentComponent } from "./first-component/first-component.component";
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstAComponent } from './first-a/first-a.component';
import { SecondAComponent } from './second-a/second-a.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent, SecondTestComponent, FirstComponentComponent, SecondComponentComponent, FirstAComponent, SecondAComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
