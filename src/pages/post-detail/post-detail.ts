import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage({
	segment: 'post/:postId'
})
@Component({
	selector: 'page-post-detail',
	templateUrl: 'post-detail.html',
})
export class PostDetailPage {
	post: any;
	rootUrl: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor PostDetailPage');
		this.post = this.navParams.get('post');
		this.rootUrl = greybackProvider.rootUrl;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PostDetailPage');
	}

}
