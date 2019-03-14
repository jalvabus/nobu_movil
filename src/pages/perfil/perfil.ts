import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  form: any = {};

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      passwordOld: ['', Validators.required],
      passwordNew: ['', Validators.required]
    });
  }

  update() {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
