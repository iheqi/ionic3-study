import { Component,ViewChild,ChangeDetectorRef } from '@angular/core';
import { NavController,Content,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content)content:Content;
  myOpacity=0;
  header = false;
  constructor(public navCtrl: NavController,public cd:ChangeDetectorRef,public viewCtrl:ViewController) {

  }
  goHome(){
    this.navCtrl.push(LoginPage);
  }
  check(){

  	let num = this.content.scrollTop;
  	if(num<30){
      this.header = false;
    }
    else if(30 < num && num <= 400){
  		this.myOpacity = num / 400;
      this.header = true;
  	}else{
      this.header = true;
  		this.myOpacity = 1;
  	}
  	this.cd.detectChanges();
  }


  dismiss() {
   this.viewCtrl.dismiss();
  }

}
