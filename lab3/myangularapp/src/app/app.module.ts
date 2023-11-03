import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './communication.service';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { ThumbnailService } from './thumbnail-service.service';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThumbnailListComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThumbnailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
