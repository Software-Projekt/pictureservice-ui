import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GetDataComponent } from './services/get-data/get-data.component';
import { EventComponent } from './event/event.component';
import { PictureComponent } from './picture/picture.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileuploadComponent } from './fileupload/fileupload.component';


@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    EventComponent,
    PictureComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
