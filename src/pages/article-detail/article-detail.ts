import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage({
	segment: 'article/:articleId'
})
@Component({
	selector: 'page-article-detail',
	templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {
	article: any;
	rootUrl: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		console.log('constructor ArticleDetailPage');
		this.article = this.navParams.get('article');
		this.rootUrl = greybackProvider.rootUrl;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ArticleDetailPage');
	}

}
