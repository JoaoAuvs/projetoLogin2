import { NgModule } from '@angular/core';
import { TelaPerfilPageRoutingModule } from './tela-perfil-routing.module';
import { TelaPerfilPage } from './tela-perfil.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaPerfilPageRoutingModule
  ],
  declarations: [TelaPerfilPage]
})
export class TelaPerfilPageModule {}