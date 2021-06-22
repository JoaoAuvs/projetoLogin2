import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperacaoDeSenhaPage } from './recuperacao-de-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacaoDeSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacaoDeSenhaPageRoutingModule {}