import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController } from 'ionic-angular';

@Injectable()
export class AudioProvider {
	player: any;
	playing: boolean = false;
	loading: boolean = true;
	current: number = 0;
	duration: number = 0;
	percentage: number = 0;
	title: string = '';
	speaker: string = '';

	constructor(public http: Http, public alertCtrl: AlertController) {
		var self = this;
		this.player = new Audio();
		this.player.ontimeupdate = function (player) {
			self.current = new Date(1970, 0, 1).setSeconds(player.srcElement.currentTime);
			self.duration = new Date(1970, 0, 1).setSeconds(player.srcElement.duration);
			self.percentage = Math.round(player.srcElement.currentTime / player.srcElement.duration * 100);
		}
		this.player.onprogress = function (data) {
			console.log(['onprogress',data]);
		}
		this.player.oncanplay = function (data) {
			console.log(['oncanplay',data]);
			//self.player.play();
		}
		this.player.oncanplaythrough = function (data) {
			self.loading = false;
			console.log(['oncanplaythrough',data]);
		}
		this.player.onstalled = function (data) {
			console.log(['onstalled',data]);
		}
		this.player.onabort = function (data) {
			console.log(['onabort',data]);
		}
		this.player.onerror = function (data) {
			let alert = self.alertCtrl.create({
				title: 'Oh no!',
				subTitle: 'There was an error trying to load the audio file. You might try again later or listen to a different one.',
				buttons: ['Ok']
			});
			alert.present();
			self.playing = false;
			self.loading = true;
			self.title = '';
			console.log(['onerror',data]);
		}
		this.player.onloadstart = function (data) {
			console.log(['onloadstart',data]);
		}
		this.player.onplaying = function (data) {
			console.log(['onplaying',data]);
		}
		this.player.onplay = function (data) {
			console.log(['onplay',data]);
		}
		this.player.onpause = function (data) {
			console.log(['onpause',data]);
		}
	}

	play(config: any) {
		this.playing = true;
		this.loading = true;
		this.title = config.title;
		this.speaker = config.speaker;
		this.player.src = config.url+'/file.mp3';
		this.player.load();
		this.player.play();
	}

	pause() {
		if (this.playing) {
			this.player.pause();
			this.playing = false;
		} else {
			this.player.play();
			this.playing = true;
		}
	}

	scrub(percent) {
		this.player.currentTime = (percent.value / 100) * this.player.duration;
	}
}