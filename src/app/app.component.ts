import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario:string='João Alves'
  isLoged=true;

  public appPages = [
    { title: 'Perfil', url: '/tela-perfil', icon: 'person-circle' },
    { title: 'Ambientes', url: '/tela-ambiente', icon: 'pricetag' },
    { title: 'Embarcados', url: '/tela-embarcados-listar', icon: 'hardware-chip' },
  ];
  public labels = [
    { title: 'Localização', url:'', icon:'locate-outline' },
    { title: 'Telefones', url: '', icon:'call-outline' },
    { title: 'Suporte Técnico', url: '', icon:'construct-outline' },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtr : NavController
  ) {
    this.initializeApp();
  }

  logout(){
    this.navCtr.navigateForward('login')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}