import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgZorroPage } from './ng-zorro';


import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [
    NgZorroPage,
  ],
  imports: [
    IonicPageModule.forChild(NgZorroPage),
    NgZorroAntdModule
  ],
})
export class NgZorroPageModule {}
