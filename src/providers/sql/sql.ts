import { Injectable } from '@angular/core';
import { NativeService } from "../native-service/native-service";
// import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject, SQLiteTransaction } from '@ionic-native/sqlite';


@Injectable()
export class SqlProvider {
  // window对象
  private win: any = window;
  // 数据库对象
  private database: SQLiteObject;

  constructor(private sqlite: SQLite, private nS: NativeService) {
    console.log('Hello SqlProvider Provider');
  }

  public initDB()
  {
    // openDatabase方法打开一个已经存在的数据库，如果数据库不存在，它还可以创建数据库。几个参数意义分别是：
    // 1.数据库名称。
    // 2.版本号 目前为1.0,不管他，写死就OK。
    // 3.对数据库的描述。
    // 4.设置数据的大小,byte为单位
    // 5.回调函数(可省略)。
    if (!this.win.sqlitePlugin)
    {
      //window.openDatabase("数据库名字", "版本","数据库描述",数据库大小);
      this.database = this.win.openDatabase('myData.db', '1.0',
        '测试sql', 1024 * 1024);
      return;
    }
    if (this.nS.isAndroid())
    {
      this.sqlite.create({
        name: 'myData1.db',
        location: 'default'
      }).then((db) => {
        this.database = db;
      }).catch(err => {
        console.log(err);
      });
    }
    else
    {
      this.sqlite.create({
        name: 'myData1.db',
        iosDatabaseLocation: ''
      }).then((db) => {
        this.database = db;
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
