import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: '../../views/contato.html'
})
export class ContatoComponent{

  constructor(private router: Router){}

  enviarContato(){
      alert('Obrigado por entrar em contato.');
      this.router.navigate(['']);
  }

}
