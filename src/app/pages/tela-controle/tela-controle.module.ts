import { NgModule } from '@angular/core';
import { TelaControlePageRoutingModule } from './tela-controle-routing.module';
import { TelaControlePage } from './tela-controle.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaControlePageRoutingModule
  ],
  declarations: [TelaControlePage]
})
export class TelaControlePageModule {}
