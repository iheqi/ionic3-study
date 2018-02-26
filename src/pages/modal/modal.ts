import { Component } from '@angular/core';
import { IonicPage,ModalController,NavController} from 'ionic-angular';
import { HomePage } from '../home/home'
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  expanded: any;
  contracted: any;
  showIcon = true;
  preload  = true;

  constructor(public modalCtrl:ModalController,public navCtrl:NavController) {

  }

  expand() {
    this.expanded = true;
    this.contracted = !this.expanded;
    this.showIcon = false;
    setTimeout(() => {
      const modal = this.modalCtrl.create(HomePage);
      modal.present();
      modal.onDidDismiss(data => {    //当modal被关闭时调用此方法
        this.expanded = false;
        this.contracted = !this.expanded;
        setTimeout(() => this.showIcon = true, 330);
      });
    },         200);
  }
}
