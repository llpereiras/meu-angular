import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  styles: [`
    .ilikeangular2 {
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-image: url("app/free_bt_theme/img/happy.png");
      display: inline-block;
    }
  `],
  templateUrl: '../../views/home.html'
})
export class HomeComponent{}
