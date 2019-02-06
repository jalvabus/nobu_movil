import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { Socket } from 'ng-socket-io';

/**
 * Generated class for the BotonPanicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boton-panico',
  templateUrl: 'boton-panico.html',
})
export class BotonPanicoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public alertCtrl: AlertController,
    private socket: Socket
  ) {
  }

  enviarCoordenadas() {
    console.log("Alerta enviada");

    this.showAlert();
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.socket.connect();
      this.socket.emit('alerta', { latitud: resp.coords.latitude, longitud: resp.coords.longitude });

      console.log(resp);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    /*
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
*/
  }

  ayuda() {
    console.log("Hola");
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alerta Enviada!',
      subTitle: 'Tu alerta a sidoenviada espera por la ayuda!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonPanicoPage');
  }

}
