import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmacionCorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { InicioPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-confirmacion-correo',
  templateUrl: 'confirmacion-correo.html',
})
export class ConfirmacionCorreoPage {

  @ViewChild('number1') number1;
  @ViewChild('number2') number2;
  @ViewChild('number3') number3;
  @ViewChild('number4') number4;

  usuario: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('usuario'));
    this.usuario = navParams.get('usuario');
  }

  processKeyUp2() {
    this.number2.setFocus();
  }

  processKeyUp3() {
    this.number3.setFocus();
  }

  processKeyUp4() {
    this.number4.setFocus();
  }

  confirmarCodigo() {
    this.navCtrl.setRoot(InicioPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacionCorreoPage');
  }

}
