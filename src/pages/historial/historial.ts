import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { UsuarioProvider } from '../../providers/index.providers';
import { HistorialDetallesPage } from '../index.pages';
@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  alertas: any = [];
  usuario: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider
  ) {
    this.usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.getAlertas();
  }

  getAlertas() {
    this.usuarioProvider.obtenerNotificaciones(this.usuario._id)
      .then((alertas) => {
        console.log(alertas);
        this.alertas = alertas;
      })
  }

  detallesAlerta(alerta: any) {
    this.navCtrl.push(HistorialDetallesPage, { alerta: alerta });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

}
