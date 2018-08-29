import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage({
	segment: 'event/:eventId'
})
@Component({
	selector: 'page-event-detail',
	templateUrl: 'event-detail.html',
})
export class EventDetailPage {
	event: any;
	rootUrl: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor EventDetailPage');
		// let objEvent = this.navParams.get('event');
		// this.greybackProvider.getEvent(objEvent.EventId).subscribe(event => {
		// 	this.event = event;
		// });
		this.event = this.navParams.get('event');
		this.rootUrl = greybackProvider.rootUrl;
	}

	convertDate(date) {
		let newDate = Date.parse(date.substr(0,date.length - 4).replace(' ','T'));
		return newDate;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventDetailPage');
	}

}
