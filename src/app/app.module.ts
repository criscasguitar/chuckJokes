import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckComponent } from './chuck/chuck.component';
import { NavChuckComponent } from './nav-chuck/nav-chuck.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ChuckComponent,
    NavChuckComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
