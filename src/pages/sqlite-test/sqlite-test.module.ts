import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqliteTestPage } from './sqlite-test';

@NgModule({
  declarations: [
    SqliteTestPage,
  ],
  imports: [
    IonicPageModule.forChild(SqliteTestPage),
  ],
})
export class SqliteTestPageModule {}
