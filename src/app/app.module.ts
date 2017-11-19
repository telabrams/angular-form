import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular material
import {
MatTabsModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatButtonModule } from '@angular/material';


//Animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Forms mobule
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Routes in the app
import { AppRoutingModule } from './core/routing/app-routing.module';

//Http modules
import { JsonpModule } from '@angular/http';
import { HttpModule } from '@angular/http';

//Services
import { HttpService } from './core/services/http.service'

//Components
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PersonalHelloComponent } from './personal-hello/personal-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    PersonalHelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
