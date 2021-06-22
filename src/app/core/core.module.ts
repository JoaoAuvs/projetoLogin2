import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ],
  providers:[
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports:[
    BrowserModule,
    IonicModule
  ]
})
export class CoreModule { }
