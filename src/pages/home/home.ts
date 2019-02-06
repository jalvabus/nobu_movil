import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doLogout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
