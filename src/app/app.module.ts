import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
import { SharedModule } from './shared.module';
import { GreybackProvider } from '../providers/greyback/greyback';
import { AudioProvider } from '../providers/audio/audio';
import { HttpClientModule } from '@angular/common/http';

import { Pro } from '@ionic/pro';
const IonicPro = Pro.init('2191a4b0', {
	appVersion: "1.0.0"
});
export class MyErrorHandler implements ErrorHandler {
	handleError(err: any): void {
		IonicPro.monitoring.handleNewError(err);
	}
}
@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp, {
			mode: 'ios'
		}),
		MomentModule,
		SharedModule,
		HttpClientModule
	],
	exports: [],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		GreybackProvider,
		AudioProvider,
		InAppBrowser,
		SharedModule
	]
})
export class AppModule { }
