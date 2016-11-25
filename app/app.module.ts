import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { PortfolioComponent } from './portfolio.component';
import { ContatoComponent } from './contato.component';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, PortfolioComponent, ContatoComponent, ViewComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
