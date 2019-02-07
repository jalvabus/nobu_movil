import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LoginPage, BotonPanicoPage, HistorialPage, PerfilPage } from '../index.pages';
import { UsuarioProvider } from '../../providers/index.providers';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  rootPage: any = BotonPanicoPage;
  usuario: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider
  ) {
    this.usuarioProvider.getUsuario()
    .then((usuario: any)=> {
      this.usuario = usuario;
    })
  }

  openInicio() {
    this.rootPage = BotonPanicoPage;
  }

  openHistoral() {
    this.rootPage = HistorialPage;
  }

  cerrarSesion() {
    window.localStorage.clear();
    this.navCtrl.setRoot(LoginPage)
  }

  openPerfil() {
    this.rootPage = PerfilPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
