import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitySelectPage } from './city-select';
import { MultiPickerModule } from 'ion-multi-picker';   //大神封装的三级联动

@NgModule({
  declarations: [
    CitySelectPage,
  ],
  imports: [
  	MultiPickerModule,
    IonicPageModule.forChild(CitySelectPage),
  ],
})
export class CitySelectPageModule {}
