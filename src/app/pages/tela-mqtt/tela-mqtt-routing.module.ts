import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaMqttPage } from './tela-mqtt.page';

const routes: Routes = [
  {
    path: '',
    component: TelaMqttPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaMqttPageRoutingModule {}