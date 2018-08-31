import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GreybackProvider } from "../../providers/greyback/greyback";
import { LoadingController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
// import * as moment from "moment";

@IonicPage()
@Component({
  selector: "page-events",
  templateUrl: "events.html"
})
export class EventsPage {
  events: any[];
  rootUrl: string;
  curMonth: string;
  curDay: string;
  monthIndex: number = 0;
  dayIndex: number = 0;
  pageIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public greybackProvider: GreybackProvider,
    public loadingCtrl: LoadingController,
    private iab: InAppBrowser
  ) {
    console.log("constructor EventsPage");
    this.rootUrl = greybackProvider.rootUrl;
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.greybackProvider.getEvents().subscribe(events => {
      this.events = events.data;
      console.log("events", this.events);
      loader.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventsPage");
  }

  viewEvent(event) {
    this.iab.create(event.NewsArticle.link, "_system");
  }
}
