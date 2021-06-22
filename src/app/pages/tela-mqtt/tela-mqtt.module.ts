import { NgModule } from '@angular/core';
import { TelaMqttPageRoutingModule } from './tela-mqtt-routing.module';
import { TelaMqttPage } from './tela-mqtt.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TelaMqttPageRoutingModule
  ],
  declarations: [TelaMqttPage]
})
export class TelaMqttPageModule {}