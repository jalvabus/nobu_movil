import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;

/**
 * Generated class for the HistorialDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial-detalles',
  templateUrl: 'historial-detalles.html',
})
export class HistorialDetallesPage {

  usuario: any = {};
  alerta: any = {};

  @ViewChild('gmap') mapElement: ElementRef;
  map: any;
  placeInfoWindow: any;
  marker: any;

  cargando = true;

  lat: number;
  lng: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.cargando = true;
    this.usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.alerta = this.navParams.get('alerta');
    console.log("ALERTA", this.alerta);
    setTimeout(() => {
      this.cargando = false;
      this.obtenerPosicion();
    }, 2000)
  }

  obtenerPosicion() {
    try {
      console.log("ObteniendoPosicion");

      this.lat = Number(this.alerta.ubicacion.latitud);
      this.lng = Number(this.alerta.ubicacion.longitud);

      console.log(this.lat);
      console.log(this.lng);

      this.map = new google.maps.Map(document.getElementById('gmap'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.placeInfoWindow = new google.maps.InfoWindow();

      this.marker = new google.maps.Marker({
        map: this.map,
        draggable: false,
        position: new google.maps.LatLng(this.lat, this.lng),
        animation: google.maps.Animation.DROP
      });
    } catch (err) {
      console.log(err);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialDetallesPage');
  }

}
