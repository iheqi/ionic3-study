import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReactionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reactions',
  templateUrl: 'reactions.html',
})
export class ReactionsPage {
  icons:Array<{name:string}>;
  constructor(public navCtrl: NavController,public viewCtrl:ViewController) {
    this.icons = [
      {name:"happy"},
      {name:"heart"},
      {name:"outlet"},
      {name:"star"},
      {name:"sad"},
    ]
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactionsPage');
  }
  dismiss(){
    this.viewCtrl.dismiss()
  }
}
