import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialDetallesPage } from './historial-detalles';

@NgModule({
  declarations: [
    HistorialDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialDetallesPage),
  ],
})
export class HistorialDetallesPageModule {}
