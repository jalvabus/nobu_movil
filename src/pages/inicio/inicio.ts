import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LoginPage, BotonPanicoPage, HistorialPage, PerfilPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  rootPage: any = BotonPanicoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openInicio() {
    this.rootPage = BotonPanicoPage;
  }

  openHistoral() {
    this.rootPage = HistorialPage;
  }

  cerrarSesion() {
    this.navCtrl.setRoot(LoginPage)
  }

  openPerfil() {
    this.rootPage = PerfilPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
