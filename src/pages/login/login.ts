import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';

import { IngresarCorreoPage, InicioPage } from '../index.pages';
import { LoginProvider, UsuarioProvider } from '../../providers/index.providers';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: any = {}

  constructor(
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public usuarioProvider: UsuarioProvider
  ) {
    let token = window.localStorage.getItem('token');

    if (token) {
      this.navCtrl.setRoot(InicioPage);
    }

    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin() {
    console.log(this.form.value)
    let loader = this.loadingCtrl.create({
      content: "Iniciando sesión...",
      duration: 3000
    });
    loader.present();

    this.loginProvider.doLogin(this.form.value)
      .then((token) => {
        this.usuarioProvider.getUsuario()
          .then((usuario: any) => {
            if (usuario.codigo.entregado) {
              loader.dismiss();
              this.navCtrl.setRoot(InicioPage);
            } else {
              loader.dismiss();
              let alert = this.alertCtrl.create({
                title: 'Error al inciar sesión',
                subTitle: 'Debe verificar el codigo enviado al correo: ' + usuario.email,
                buttons: ['Aceptar']
              });
              alert.present();
            }
          })
          .catch((err) => {
            console.log(err);
          })

      })
      .catch((err) => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error al inciar sesión',
          subTitle: 'No existe el usuario',
          buttons: ['Aceptar']
        });
        alert.present();
      })

  }

  registro() {
    this.navCtrl.push(IngresarCorreoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
