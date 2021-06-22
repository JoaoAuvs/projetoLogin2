import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaWifiPage } from './tela-wifi.page';

const routes: Routes = [
  {
    path: '',
    component: TelaWifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaWifiPageRoutingModule {}