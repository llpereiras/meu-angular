import { Component } from '@angular/core';
import { AppComponent } from './app.component'
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contato',
  templateUrl: '../../views/contato.html'
})
export class ContatoComponent{

  constructor(private router: Router){}

  enviarContato(){
      alert('Obrigado por entrar em contato.');
      this.router.navigate(['']);
  }

}
