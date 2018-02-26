import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-clip-path',
  templateUrl: 'clip-path.html',
})
export class ClipPathPage {
  images;
  methods:string = "myAlert1()";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = [
      {imagePath: 'assets/img/photo/1.png', toBeDeleted: false,},
      {imagePath: 'assets/img/photo/2.png', toBeDeleted: false,},
      {imagePath: 'assets/img/photo/3.png', toBeDeleted: false,},
      {imagePath: 'assets/img/photo/4.png', toBeDeleted: false,},
      {imagePath: 'assets/img/photo/5.png', toBeDeleted: false,},
    ];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClipPathPage');
  }
  toggleImgDelete(image){
    image.toBeDeleted = !image.toBeDeleted;
  }
  trash(){
    let trashs = document.querySelectorAll(".trashs");
    //let content = document.getElementById("content");
    for(let i=0;i<trashs.length;i++){
       trashs[i].parentNode.removeChild(trashs[i]);
     }
    
  }
  test(){
    if(this.methods == "myAlert1()"){
      this.myAlert1();
      this.methods = "myAlert2()"
    }else if(this.methods == "myAlert2()"){
      this.myAlert2();
      this.methods = "myAlert1()"
    }
  }
  myAlert1(){
    alert("删除！")
  }
  myAlert2(){
    alert("成功！")
  }
  

}
