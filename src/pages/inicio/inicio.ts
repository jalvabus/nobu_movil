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
  usuario: any = {
    email: 'email@email.com'
  };

  pages: Array<{ title: string, component: any, icon: string }>;
  activePage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider
  ) {
    this.usuario = JSON.parse(window.localStorage.getItem('usuario'));

    this.pages = [
      { title: 'Inicio', component: BotonPanicoPage, icon: 'home' },
      { title: 'Historial', component: HistorialPage, icon: 'list-box' },
      { title: 'Perfil', component: PerfilPage, icon: 'contact' },
    ];

    this.activePage = this.pages[0];

  }

  openPage(page) {
    this.rootPage = page.component;
    this.activePage = page;
  }

  menuActive(page) {
    return page == this.activePage;
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
