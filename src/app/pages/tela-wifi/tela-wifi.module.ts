import { NgModule } from '@angular/core';
import { TelaWifiPageRoutingModule } from './tela-wifi-routing.module';
import { TelaWifiPage } from './tela-wifi.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaWifiPageRoutingModule
  ],
  declarations: [TelaWifiPage]
})
export class TelaWifiPageModule {}