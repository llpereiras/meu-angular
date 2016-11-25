import { Component } from '@angular/core';
import { AppComponent } from './app.component'

@Component({
  moduleId: module.id,
  selector: 'app-container',
  template: '<app-home></app-home><app-portfolio></app-portfolio><app-contato></app-contato>'
})
export class ViewComponent{}
