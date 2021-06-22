import { NgModule } from '@angular/core';
import { TelaEmbarcadosListarPageRoutingModule } from './tela-embarcados-listar-routing.module';
import { TelaEmbarcadosListarPage } from './tela-embarcados-listar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaEmbarcadosListarPageRoutingModule
  ],
  declarations: [TelaEmbarcadosListarPage]
})
export class TelaEmbarcadosListarPageModule {}
