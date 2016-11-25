import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../componentes/home';
import { ContatoComponent } from './../componentes/contato';
import { PortfolioComponent } from './../componentes/portfolio';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
];

export const routing = RouterModule.forRoot(routes);
