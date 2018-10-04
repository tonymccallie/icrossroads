import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GreybackProvider } from '../../providers/greyback/greyback';
import { AudioProvider } from '../../providers/audio/audio';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-sermon',
	templateUrl: 'sermon.html',
})
export class SermonPage {
	series: any;
	sermon: any;
	rootUrl: string;
	player: any;
	source: string;
	poster: string;
	keywords: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public greybackProvider: GreybackProvider, public audioProvider: AudioProvider, public menuCtrl: MenuController) {
		this.sermon = this.navParams.get('sermon');
		this.series = this.navParams.get('series');
		this.rootUrl = greybackProvider.rootUrl;
		this.player = audioProvider;
		this.keywords = this.sermon.MessageMessage.keywords;
		// this.source = this.rootUrl + '/play/vid/' + this.sermon.MediaVideo.id + '/vid.mp4';
		this.source = 'https://58d0522161a40.streamlock.net:4443/svs4/smil:SMILNOAO_5079_' + this.keywords + '.smil/manifest.m3u8';
		// this.poster = this.rootUrl + '/img/thumb/' + this.sermon.MediaVideo.preview + '/width:854/height:480/crop:true/zoom:auto/image.jpg';
		this.poster = 'https://i13.netformzcdn.com/images_accounts/video_thumbnails/5079_' + this.keywords + '_640x360.jpg';
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SermonPage');
	}


	playAudio(sermon) {
		
		console.log('keywords audio:', this.keywords);

		this.audioProvider.play({
			// url: this.rootUrl + '/play/mp3/' + sermon.MediaAudio.id,
			url: 'http://www.sundaystreamspodcasts.com/podcasts3/5079_' + this.keywords + '_PODCAST.mp3',
			title: sermon.MessageMessage.title,
			speaker: sermon.MessageAuthor.name
		});
		this.menuCtrl.open();
	}
}
