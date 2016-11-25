import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ContatoComponent } from './contato.component';
import { PortfolioComponent } from './portfolio.component';
import { ViewComponent } from './view.component';

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
