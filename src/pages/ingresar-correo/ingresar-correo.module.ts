import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresarCorreoPage } from './ingresar-correo';

@NgModule({
  declarations: [
    IngresarCorreoPage,
  ],
  imports: [
    IonicPageModule.forChild(IngresarCorreoPage),
  ],
})
export class IngresarCorreoPageModule {}
