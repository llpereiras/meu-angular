import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './routes';

import { AppComponent }  from './../componentes/app';
import { HomeComponent } from './../componentes/home';
import { PortfolioComponent } from './../componentes/portfolio';
import { ContatoComponent } from './../componentes/contato';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, PortfolioComponent, ContatoComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
