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

    loader.dismiss();

    this.navCtrl.setRoot(InicioPage);
    /*
    this.loginProvider.doLogin(this.form.value)
      .then((token) => {

        this.usuarioProvider.getUsuario()
          .then((usuario: any) => {
            if (usuario.rol == 'SA') {
              this.navCtrl.setRoot("ContenedorSaPage");
            }
            else if (usuario.rol == 'A') {
              this.navCtrl.setRoot("ContenedorAPage");
            }
            else if (usuario.rol == 'C') {
              this.navCtrl.setRoot("ContenedorCPage");
            }
            else if (usuario.rol == 'S') {
              this.navCtrl.setRoot("ContenedorSPage");
            }
            else if (usuario.rol == 'M') {
              this.navCtrl.setRoot("ContenedorMPage");
            }else if(usuario.rol=='SAE'){
              this.navCtrl.setRoot("ContenedorSaePage");
             }
          })
          .catch((err) => {
            console.log(err);
          })

        loader.dismiss();
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
      */
  }

  registro() {
    this.navCtrl.push(IngresarCorreoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
