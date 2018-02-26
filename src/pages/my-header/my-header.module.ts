import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyHeaderPage } from './my-header';

@NgModule({
  declarations: [
    MyHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(MyHeaderPage),
  ],
})
export class MyHeaderPageModule {}
