import { NgModule } from '@angular/core';
import { TelaAmbientePageRoutingModule } from './tela-ambiente-routing.module';
import { TelaAmbientePage } from './tela-ambiente.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaAmbientePageRoutingModule
  ],
  declarations: [TelaAmbientePage]
})
export class TelaAmbientePageModule {}