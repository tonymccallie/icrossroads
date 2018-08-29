import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
//LaunchNavigatorOptions

@IonicPage()
@Component({
	selector: 'page-location',
	templateUrl: 'location.html',
})
export class LocationPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LocationPage');
	}

	map(location: string) {
		this.launchNavigator.navigate(location);
	}
}
