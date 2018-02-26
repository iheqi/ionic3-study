import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-popover',
  templateUrl: 'my-popover.html',
})
export class MyPopoverPage {

  constructor(public navCtrl: NavController, public popCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPopoverPage');
  }
  like(){
    console.log("like")
  }

  showReactions(myEvent){
    let reactions = this.popCtrl.create('ReactionsPage');
    reactions.present({
        ev: myEvent
      });
  }
}
