import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FlashCardPage } from '../pages/flash-card/flash-card';
import { ExpandableHeaderPage } from '../pages/expandable-header/expandable-header';

import { MultiPickerModule } from 'ion-multi-picker';   // 大神封装的三级联动
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SqlProvider } from '../providers/sql/sql';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FlashCardPage,
    ExpandableHeaderPage
  ],
  imports: [
    BrowserModule,
    MultiPickerModule, // Import MultiPickerModule
    IonicModule.forRoot(MyApp, {
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      scrollAssist:true	
    }),
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FlashCardPage,
    ExpandableHeaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlProvider
  ]
})
export class AppModule {}
