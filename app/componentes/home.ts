import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  styles: [`
    .happy {
      width: 30px;
      height: 30px;
      margin-bottom:-5px;
      background-repeat: no-repeat;
      background-image: url("free_bt_theme/img/happy.png");
      background-size: 30px 30px;
      background-repeat: no-repeat;
      display: inline-block;
    }

    .angry {
      width: 50px;
      height: 50px;
      margin-bottom:-15px;
      background-repeat: no-repeat;
      background-image: url("free_bt_theme/img/angry.png");
      background-size: 50px 50px;
      background-repeat: no-repeat;
      display: inline-block;
    }
  `],
  templateUrl: '../../views/home.html'
})
export class HomeComponent{}
