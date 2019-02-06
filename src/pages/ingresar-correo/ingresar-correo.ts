import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the IngresarCorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ConfirmacionCorreoPage } from '../index.pages';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-ingresar-correo',
  templateUrl: 'ingresar-correo.html',
})
export class IngresarCorreoPage {

  form: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public usuarioProvider: UsuarioProvider
  ) {
    this.form = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    }, this.matchPassword);
  }

  matchPassword(group): any {
    let password = group.controls.password;
    let confirm = group.controls.passwordConfirm;
    console.log("indise");
    // Don't kick in until user touches both fields
    if (password.pristine || confirm.pristine) {
      console.log("sd");
      return null;
    }

    // Mark group as touched so we can add invalid class easily
    group.markAsTouched();

    if (password.value === confirm.value) {
      return null;
    }
    console.log("sdfdsf");
    return {
      isValid: false
    };
  }

  registrarUsuario() {

    if (this.form.passwordConfirm === this.form.password) {
      this.usuarioProvider.enviarCorreoVerificacion(this.form.value)
      .then(response => {
        console.log(response);
        this.navCtrl.push(ConfirmacionCorreoPage, {usuario: this.form.value});
      }, err => {
        console.log(err);
      })
      
    } else {
      console.log("Las contraseñas no coinciden");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarCorreoPage');
  }

}
