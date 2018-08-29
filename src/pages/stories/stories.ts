import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';

@IonicPage()
@Component({
	selector: 'page-stories',
	templateUrl: 'stories.html',
})
export class StoriesPage {
	stories: any[];
	topStory: any;
	rootUrl: string;
	source: string;
	poster: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider) {
		this.greybackProvider.getSeriesById(52).subscribe(stories => {
			this.stories = stories.data;
			this.topStory = stories.data[0];
			this.source = this.rootUrl + '/play/vid/' + this.topStory.MediaVideo.id + '/vid.mp4';
			this.poster = this.rootUrl + '/img/thumb/' + this.topStory.MediaVideo.preview + '/width:854/height:480/crop:true/zoom:auto/image.jpg';
		});
		this.rootUrl = greybackProvider.rootUrl;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad StoriesPage');
	}

	viewStory(story) {
		this.source = this.rootUrl + '/play/vid/' + story.MediaVideo.id + '/vid.mp4';
		this.poster = this.rootUrl + '/img/thumb/' + story.MediaVideo.preview + '/width:854/height:480/crop:true/zoom:auto/image.jpg';
	}
}
