import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaControlePage } from './tela-controle.page';

const routes: Routes = [
  {
    path: '',
    component: TelaControlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaControlePageRoutingModule {}