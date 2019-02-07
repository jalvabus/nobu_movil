import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

/**
 * Socket .io
 */
//import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//const config: SocketIoConfig = { url: 'http://207.38.94.126:25808', options: {} };
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {
  HomePage,
  ConfirmacionCorreoPage,
  LoginPage,
  IngresarCorreoPage,
  BotonPanicoPage,
  HistorialPage,
  InicioPage,
  PerfilPage
} from '../pages/index.pages';

import { LoginProvider } from '../providers/login/login';
import { AlertasProvider } from '../providers/alertas/alertas';
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfirmacionCorreoPage,
    LoginPage,
    IngresarCorreoPage,
    BotonPanicoPage,
    HistorialPage,
    InicioPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    //SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfirmacionCorreoPage,
    LoginPage,
    IngresarCorreoPage,
    BotonPanicoPage,
    HistorialPage,
    InicioPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    LoginProvider,
    AlertasProvider,
    UsuarioProvider
  ]
})
export class AppModule { }
