import { NgModule } from '@angular/core';
import { TelaEmbarcadoPageRoutingModule } from './tela-embarcado-routing.module';
import { TelaEmbarcadoPage } from './tela-embarcado.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaEmbarcadoPageRoutingModule
  ],
  declarations: [TelaEmbarcadoPage]
})
export class TelaEmbarcadoPageModule {}