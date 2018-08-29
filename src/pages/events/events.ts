import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';
import { LoadingController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
	selector: 'page-events',
	templateUrl: 'events.html',
})
export class EventsPage {
	events: any[];
	rootUrl: string;
	curMonth: string;
	curDay: string;
	monthIndex: number = 0;
	dayIndex: number = 0;
	pageIndex: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider, public loadingCtrl: LoadingController) {
		console.log('constructor EventsPage');
		this.rootUrl = greybackProvider.rootUrl;
		let loader = this.loadingCtrl.create({
			content: "Please wait..."
		});
		loader.present();
		this.greybackProvider.getCalendar(this.pageIndex).then(events => {
			//this.events = events.Page;
			console.log(events);
			this.events = [];
			this.addEvents(events);
			loader.dismiss();
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventsPage');
	}

	convertDate(date) {
		let newDate = Date.parse(date.substr(0, date.length - 4).replace(' ', 'T'));
		return newDate;
	}

	doInfinite(infiniteScroll) {
		console.log('doInfinite');
		this.pageIndex++;
		this.greybackProvider.getCalendar(this.pageIndex).then(events => {
			this.addEvents(events);
			infiniteScroll.complete();
		});
	}

	viewEvent(event) {
		this.navCtrl.push('EventDetailPage', {
			event: event,
			eventId: event.EventId
		});
	}

	addEvents(events) {
		events.forEach((event, index) => {
			let tmpMonth = moment.utc(event.OccurrenceStartTime).format('MMMM');
			let tmpDay = moment.utc(event.OccurrenceStartTime).format('dddd, MMM Do');
			if (this.curMonth != tmpMonth) {
				this.monthIndex = this.events.length;
				this.events.push({
					name: tmpMonth,
					days: []
				});
				this.curMonth = tmpMonth;
			}
			if (this.curDay != tmpDay) {
				this.dayIndex = this.events[this.monthIndex].days.length;
				this.events[this.monthIndex].days.push({
					name: tmpDay,
					events: []
				});
				this.curDay = tmpDay;
			}
			this.events[this.monthIndex].days[this.dayIndex].events.push(event);
		});
	}

}
