import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import CONFIG from '../../app/config'
import sendToken from '../../app/auth.interceptor'

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  doLogin(datos) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API_LOGIN + 'loginUsuario', datos)
        .subscribe((token) => {
          resolve(this.saveToken(token.json()));
        }, (err) => {
          reject(err);
        })
    })
  }

  saveToken(token) {
    window.localStorage.setItem('token', token);
    this.http.post(CONFIG.API + 'usuario/fetchUsuario', {token: token}, sendToken())
      .subscribe((usuario) => {
        window.localStorage.setItem('usuario',
          JSON.stringify(usuario.json()));
      },
      (err) => { console.log(err) })
    return token;
  }

}
