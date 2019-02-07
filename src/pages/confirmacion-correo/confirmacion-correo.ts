import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the ConfirmacionCorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { InicioPage } from '../index.pages';
import { UsuarioProvider } from '../../providers/index.providers';

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
  numero1: number;
  numero2: number;
  numero3: number;
  numero4: number;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider
  ) {
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
    let loader = this.loadingCtrl.create({
      content: "Iniciando sesión...",
      duration: 3000
    });
    loader.present();

    let code = String(this.numero1) + String(this.numero2) + String(this.numero3) + String(this.numero4);
    let datos = {
      email: this.usuario.email,
      codigo: code
    }
    this.usuarioProvider.confirmarCorreoVerificacion(datos)
      .then((response: any) => {
        this.navCtrl.setRoot(InicioPage);
      }).catch((err) => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error al cofirmar codigo',
          subTitle: 'No coinciden los datos',
          buttons: ['Aceptar']
        });
        alert.present();
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacionCorreoPage');
  }

}
