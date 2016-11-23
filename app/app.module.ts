import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
