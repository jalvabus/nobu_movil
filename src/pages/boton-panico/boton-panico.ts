import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// import { Geolocation } from '@ionic-native/geolocation';

// import { Socket } from 'ng-socket-io';
import { UsuarioProvider } from '../../providers/index.providers';
import { ConfirmarPosicionPage } from '../index.pages';

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

  usuario: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private geolocation: Geolocation,
    public alertCtrl: AlertController,
    //private socket: Socket,
    public usuarioProvider: UsuarioProvider
  ) {

    this.usuarioProvider.getUsuario()
      .then((usuario: any) => {
        this.usuario = usuario;
      })
  }

  enviarCoordenadas() {
    this.navCtrl.push(ConfirmarPosicionPage);
    /*
    console.log("Alerta enviada")

    this.geolocation.getCurrentPosition().then((resp) => {

      //this.socket.connect();
      let datos = {
        latitud: resp.coords.latitude,
        longitud: resp.coords.longitude,
        usuario: this.usuario._id
      }
      this.usuarioProvider.enviarAlerta(datos)
        .then((response: any) => {
          this.showAlert();
        })  
      // this.socket.emit('alerta', { latitud: resp.coords.latitude, longitud: resp.coords.longitude });

      console.log(resp);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    */
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alerta Enviada!',
      subTitle: 'Tu alerta a sido enviada espera por la ayuda!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonPanicoPage');
  }

}
