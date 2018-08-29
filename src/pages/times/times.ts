import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@IonicPage({
	segment: 'times'
})
@Component({
	selector: 'page-times',
	templateUrl: 'times.html',
})
export class TimesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
	}

	map(location: string) {
		this.launchNavigator.navigate(location);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TimesPage');
	}

}
