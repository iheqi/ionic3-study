import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  verifyCode = {
    verifyCodeTips: "获取验证码",
    countdown: 10,
    disable: false
  }
  info = {
    usertel: '',
    newpass: '',
    vcode: '',
    sure_pwd: ''
  }
  eye = "md-eye-off"
  type = "password"
  save;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }
  setTime() {
    if (this.verifyCode.countdown == 1) {
      this.verifyCode.countdown = 10;
      this.verifyCode.verifyCodeTips = "获取验证码";
      this.verifyCode.disable = false;
    } else {
      this.verifyCode.countdown--;
      this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
      setTimeout(() => {
        this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
        this.setTime();
      }, 1000);
    }
  }

  getCode() {
    if (this.info.usertel == '') {
      console.debug("请填写手机号!");
      alert("请填写手机号!");
    }else{
       //发送验证码成功后开始倒计时
      this.verifyCode.disable = true;
      this.setTime();
    }
  }
  doReset() {
    this.info.usertel;

    if (this.info.usertel == "") {
      console.debug("请输入手机号");
      alert("请输入手机号");
      return;
    }

    if (this.info.vcode == "") {
      console.debug("请输入验证码");
      alert("请输入验证码");
      return;
    }

    if (this.info.newpass == this.info.sure_pwd) {
      alert("完成!");
    } else {
      console.debug("两次密码输入不一致");
      alert("两次密码输入不一致!");
    }
  }
  toggle(){
    if(this.eye == "md-eye-off"){
      this.eye = "md-eye";
      this.type = "number";
      this.save = this.info.newpass;
    }else{
      this.eye = "md-eye-off"
      this.type = "password"
      this.save = this.info.newpass;
    }
  }
  mySave(){
    this.info.newpass = this.save;
  }

}
