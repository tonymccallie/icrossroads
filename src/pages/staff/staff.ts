import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage()
@Component({
	selector: 'page-staff',
	templateUrl: 'staff.html',
})
export class StaffPage {
	departments: any[];
	rootUrl: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		this.greybackProvider.getStaff().subscribe(departments => {
			this.departments = departments.data;
		});
		this.rootUrl = greybackProvider.rootUrl;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad StaffPage');
	}

	mailto(staff) {
		console.log('mailto');
	}
}
