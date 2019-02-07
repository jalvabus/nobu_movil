import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import CONFIG from '../../app/config'
import sendToken from '../../app/auth.interceptor'

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
  }

  getUsuario() {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token');

      this.http.post(CONFIG.API + 'usuario/fetchUsuario', {token: token}, sendToken())
        .subscribe((usuario) => {
          resolve(usuario.json())
        }, (err) => {
          reject(err)
        })
    })
  }

  enviarCorreoVerificacion(form) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'usuario', form)
        .subscribe(response => {
          resolve(response.json())
        }, err => {
          reject(err);
        })
    })
  }

  confirmarCorreoVerificacion(data) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'usuario/verificarCodigo', data, sendToken())
        .subscribe((response) => {
          resolve(response.json())
        }, (err) => {
          reject(err)
        })
    })
  }

  enviarAlerta(data) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'notificacion', data, sendToken())
        .subscribe((response) => {
          resolve(response.json())
        }, (err) => {
          reject(err)
        })
    })
  }
  
  obtenerNotificaciones(usuario) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'notificacion/' + usuario, sendToken())
        .subscribe((response) => {
          resolve(response.json())
        }, (err) => {
          reject(err)
        })
    })
  }
}
