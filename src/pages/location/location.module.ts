import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
	declarations: [
		LocationPage,
	],
	imports: [
		IonicPageModule.forChild(LocationPage),
	],
	providers: [
		LaunchNavigator
	]
})
export class LocationPageModule { }
