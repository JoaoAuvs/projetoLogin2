import { NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [CoreModule, AppRoutingModule],
  providers: [StatusBar, SplashScreen],
  bootstrap: [AppComponent],
})
export class AppModule {}