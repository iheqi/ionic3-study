import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { NativeService } from "../../providers/native-service/native-service";

import { MyApp } from '../../app/app.component'

@IonicPage()
@Component({
  selector: 'page-sqlite-test',
  templateUrl: 'sqlite-test.html',
})
export class SqliteTestPage {
  private win: any = window;
  db;
  myInput;
  a:String
  constructor(public navCtrl: NavController,public sqlite :SQLite ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SqliteTestPage');
    this.db = this.win.sqlitePlugin.openDatabase({name: 'data.db', location: 'default'});
  }
  // 创建表
  createTb(){
  	this.db.executeSql('create table myTable(name VARCHAR(32))', {})
          
  }
  // 删除表
  drop(){
    this.db.executeSql('drop table myTable cascade',{});
  }
  // 插入数据
  insert() {
    //let input:string = "insert into myTable values('"+this.input+"test01')";
    let myInput:string = "insert into myTable values('test')";
    this.db.executeSql(myInput,{},function(){
      
    })
  }
  //删除数据
  delete() {
    let name :string = "delete from myTable where name='"+this.myInput+"'";
    this.db.executeSql(name,{})
    
  }
  //查询数据
  select() {

    this.db.executeSql("select name AS mycount from myTable where name='"+this.myInput+"'"
      ,[],function(tx, rs) {
        console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
      }, function(tx, error) {
        console.log('查询 error: ' + error.message);
    })
    
    //alert(this.db.rows.length);
    //alert(data.rows.item(0).name);
  }  
  
  query() {
     this.db.executeSql("select name AS mycount from t_log where name='123'",[],function(tx, rs) {
      console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
    }, function(tx, error) {
      console.log('查询 error: ' + error.message);
    })
            /*let output;
            for (let i = 0; i < data.res.rows.length; i++) {
                output.push(data.res.rows.item(i));
            }
             console.log("这是从t_log表查询得出的数据" + output);
        })
        .catch((err) => {
            console.error(err);
        })*/
  }

  /* //建立数据库
  createSQL(){
    this.sqlite.create({
      name: 'myData.db',  
      location: 'default'
    }).then(() => (console.log("数据库创建成功！")))
    .catch(e => console.log(e))
  }
  //创建表
  create(){
      SqliteTestPage.prototype.db.executeSql('create table myTable(name VARCHAR(10))', {})  //建表
        .then(() => console.log("成功创建学生表！"))
        .catch(e => console.log(e));
  }
  //删除学生表
  /*ngOnInit(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        console.log("成功创建数据库！")
        
      })
      .catch(e => console.log(e));
  }*/
}
