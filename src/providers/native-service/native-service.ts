import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
import { Platform,AlertController } from "ionic-angular";
@Injectable()
export class NativeService {

  constructor(public alertCtrl:AlertController,public platform:Platform) {
    console.log('Hello NativeService Provider');
  }
  // 是否真机环境
   
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  // 是否android真机环境
   
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  // 是否ios真机环境
   
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  alert(title: string, subTitle: string = "",): void {
    this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [{text: '确定'}]
    }).present();
  }

}