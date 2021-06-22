import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/Authentication/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperacao-de-senha',
    loadChildren: () => import('./pages/Authentication/recuperacao-de-senha/recuperacao-de-senha.module').then( m => m.RecuperacaoDeSenhaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tela-perfil',
    loadChildren: () => import('./pages/tela-perfil/tela-perfil.module').then( m => m.TelaPerfilPageModule)
  },
  {
    path: 'tela-ambiente',
    loadChildren: () => import('./pages/tela-ambiente/tela-ambiente.module').then( m => m.TelaAmbientePageModule)
  },
  {
    path: 'tela-embarcados-listar',
    loadChildren: () => import('./pages/tela-embarcados-listar/tela-embarcados-listar.module').then( m => m.TelaEmbarcadosListarPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  } /*,
  {
    path: 'tela-mqtt',
    loadChildren: () => import('./pages/tela-mqtt/tela-mqtt.module').then( m => m.TelaMqttPageModule)
  },
  {
    path: 'tela-wifi',
    loadChildren: () => import('./pages/tela-wifi/tela-wifi.module').then( m => m.TelaWifiPageModule)
  },
  {
    path: 'tela-embarcado',
    loadChildren: () => import('./pages/tela-embarcado/tela-embarcado.module').then( m => m.TelaEmbarcadoPageModule)
  },
  {
    path: 'tela-controle',
    loadChildren: () => import('./pages/tela-controle/tela-controle.module').then( m => m.TelaControlePageModule)
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}