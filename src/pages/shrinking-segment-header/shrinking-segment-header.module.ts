import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShrinkingSegmentHeaderPage } from './shrinking-segment-header';
import { ComponentsModule } from '../../components/components.module'
@NgModule({
  declarations: [
    ShrinkingSegmentHeaderPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ShrinkingSegmentHeaderPage),
  ],
})
export class ShrinkingSegmentHeaderPageModule {}
