import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaEmbarcadosListarPage } from './tela-embarcados-listar.page';

const routes: Routes = [
  {
    path: '',
    component: TelaEmbarcadosListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaEmbarcadosListarPageRoutingModule {}