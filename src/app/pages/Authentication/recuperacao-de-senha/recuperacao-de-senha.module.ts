import { NgModule } from '@angular/core';
import { RecuperacaoDeSenhaPageRoutingModule } from './recuperacao-de-senha-routing.module';
import { RecuperacaoDeSenhaPage } from './recuperacao-de-senha.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RecuperacaoDeSenhaPageRoutingModule
  ],
  declarations: [RecuperacaoDeSenhaPage]
})
export class RecuperacaoDeSenhaPageModule {}