import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimesPage } from './times';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
	declarations: [
		TimesPage,
	],
	imports: [
		IonicPageModule.forChild(TimesPage),
	],
	providers: [
		LaunchNavigator
	]
})
export class TimesPageModule { }
