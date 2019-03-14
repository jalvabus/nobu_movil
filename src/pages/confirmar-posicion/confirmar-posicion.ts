import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/index.providers';
import { Geolocation } from '@ionic-native/geolocation';
import { BotonPanicoPage } from '../index.pages';

declare var google;

/**
 * Generated class for the ConfirmarPosicionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmar-posicion',
  templateUrl: 'confirmar-posicion.html',
})
export class ConfirmarPosicionPage {

  usuario: any = {};

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  placeInfoWindow: any;
  marker: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public alertCtrl: AlertController,
    //private socket: Socket,
    public usuarioProvider: UsuarioProvider
  ) {
    this.usuario = JSON.parse(window.localStorage.getItem('usuario'));
  }

  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((resp) => {
      //this.socket.connect()
      // this.socket.emit('alerta', { latitud: resp.coords.latitude, longitud: resp.coords.longitude });
      console.log(resp);
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.placeInfoWindow = new google.maps.InfoWindow();

      this.marker = new google.maps.Marker({
        map: this.map,
        draggable: true,
        position: latLng,
        animation: google.maps.Animation.DROP
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alerta Enviada!',
      subTitle: 'Tu alerta a sido enviada espera por la ayuda!',
      buttons: ['OK']
    });
    alert.present();

    setTimeout(() => {
      this.navCtrl.setRoot(BotonPanicoPage);
    }, 2000);
  }

  enviarAlerta() {
    let datos = {
      latitud: this.marker.getPosition().lat(),
      longitud: this.marker.getPosition().lng(),
      usuario: this.usuario._id
    }
    this.usuarioProvider.enviarAlerta(datos)
      .then((response: any) => {
        this.showAlert();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarPosicionPage');
    this.obtenerPosicion();
  }

}
