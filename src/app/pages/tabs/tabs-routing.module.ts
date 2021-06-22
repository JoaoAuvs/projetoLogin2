import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tela-mqtt',
        loadChildren: () => import('../tela-mqtt/tela-mqtt.module').then( m => m.TelaMqttPageModule)
      },
      {
        path: 'tela-wifi',
        loadChildren: () => import('../tela-wifi/tela-wifi.module').then( m => m.TelaWifiPageModule)
      },
      {
        path: 'tela-embarcado',
        loadChildren: () => import('../tela-embarcado/tela-embarcado.module').then( m => m.TelaEmbarcadoPageModule)
      },
      {
        path: 'tela-controle',
        loadChildren: () => import('../tela-controle/tela-controle.module').then( m => m.TelaControlePageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tela-mqtt',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tela-mqtt',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}