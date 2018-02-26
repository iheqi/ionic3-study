import { HomePage } from './../pages/home/home';
import { Component,ViewChild } from '@angular/core';
// import { Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { FlashCardPage } from '../pages/flash-card/flash-card';
import { ExpandableHeaderPage } from '../pages/expandable-header/expandable-header';
import { NativeService } from "../providers/native-service/native-service";

@Component({
  templateUrl: 'app.html',
  providers: [NativeService]
})
export class MyApp {

  @ViewChild('myNav') navCtrl: NavController;
  rootPage :any;
  result;
  pages: Array<{ title: string, component:any}>;
  constructor(private menuCtrl: MenuController,private sqlite: SQLite,public nativeService: NativeService) {
    console.log("Hello app.component")
    this.pages = [
      {title:'Home',component:HomePage},
      {title:'Login',component:LoginPage},
      {title:'Category',component:'CategoryPage'},
      {title:'Modal',component:'ModalPage'},
      {title:'CitySelectPage',component:'CitySelectPage'},
      {title:'MyPopoverPage',component:'MyPopoverPage'},
      {title:'CSS clip-path',component:'ClipPathPage'},
      {title:'验证码倒计时按钮',component:'ForgetPage'},
      {title:'欢迎页',component:'LandingPage'},
      {title:'ng-zorro',component:'NgZorroPage'},
      {title:'nz-anchor',component:ExpandableHeaderPage},
      {title:'form-表单',component:FlashCardPage},
      {title:'sqlite的使用测试',component:'SqliteTestPage'},
      {title:'可收缩的组件',component:'ShrinkingSegmentHeaderPage'},
      {title:'渐变头部',component:'MyHeaderPage'},
    ];
    if(window.localStorage.getItem("First")) {
      this.rootPage = HomePage
      console.log("来自if的输出：" + window.localStorage.getItem("First"))
    } else {
      window.localStorage.setItem('First',"true");
      this.rootPage = 'LandingPage'
      console.log("来自else的输出：" + window.localStorage.getItem("First"))
    }
    
    
  }

  openPage(page) {

    this.menuCtrl.close();
    this.navCtrl.push(page.component)
  }
  /*test(){
    alert(JSON.stringify(this.result)+":这是来自sqlite的数据")
  }*/
  database :SQLiteObject;
  ngOnInit(){
    if (!this.nativeService.isMobile()) {
      console.log('不是真机！')
    }else{
      this.initDB();
    }
  }
  initDB(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('create table t_log(name VARCHAR(32))', {})//建表
      .then(() => console.log('创建t_log表'))
      .catch(e => console.log(e));
      //插入数据
      this.database = db;   
      db.executeSql("insert into t_log values('123')",{})
      .then(() => console.log('插入数据123到t_log表'))
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

  query() {
    this.database.executeSql("select name AS mycount from t_log where name='123'",[])
    .then((rs)=>{
      console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
    })
  }
}

