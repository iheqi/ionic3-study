import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  categoryData : Array<{name:string}>;
  photos;
  choose = false;
  j;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.categoryData = [
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  		{name:"优惠精选"},
  	];
  	this.photos=[
      'assets/img/photo/1.png',
      "assets/img/photo/2.png",
      "assets/img/photo/3.png",
      "assets/img/photo/4.png",
      "assets/img/photo/5.png",
    ] 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  choosed(i){

  	//移除上次选中菜单的样式
    if (this.j) {
      let Ele = document.getElementById(this.j);
  		Ele.style.cssText="font-size: 11px";
    }

    //修改本次选中菜单的样式
  	let Ele = document.getElementById(i.toString());
  	Ele.style.cssText="font-size: 15px;color:red";
  	Ele.style.backgroundColor="";
    //将本次选中的菜单记录
    this.j = i;

  	
  }
}
