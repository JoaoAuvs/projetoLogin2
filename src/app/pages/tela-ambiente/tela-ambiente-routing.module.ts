import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaAmbientePage } from './tela-ambiente.page';

const routes: Routes = [
  {
    path: '',
    component: TelaAmbientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaAmbientePageRoutingModule {}
