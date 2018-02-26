import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-shrinking-segment-header',
  templateUrl: 'shrinking-segment-header.html',
})
export class ShrinkingSegmentHeaderPage {
  section: string = 'one';
  somethings: any = new Array(20);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShrinkingSegmentHeaderPage');
  }

}
