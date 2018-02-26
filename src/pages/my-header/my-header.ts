import { Component,ViewChild, Renderer2 } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-header',
  templateUrl: 'my-header.html',
})
export class MyHeaderPage {
  @ViewChild("content") content;
  @ViewChild("header") header;
  constructor(public navCtrl: NavController,public renderer2: Renderer2) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyHeaderPage');
  }
  
  // 页面向上滚动150px导航栏从透明到深色背景
  scrollEvent() {
    let opacity = this.content.scrollTop / 150;
    opacity = (opacity > 1) ? 1 : opacity;
    this.renderer2.setProperty(this.header, 'color', opacity)
  }
}
    

  
