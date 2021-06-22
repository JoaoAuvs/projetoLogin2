import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaEmbarcadoPage } from './tela-embarcado.page';

const routes: Routes = [
  {
    path: '',
    component: TelaEmbarcadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaEmbarcadoPageRoutingModule {}
