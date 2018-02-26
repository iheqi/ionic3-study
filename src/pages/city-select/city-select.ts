import { Component,ViewChildren, ViewChild } from '@angular/core';
import { IonicPage, NavController,Content} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-city-select',
  templateUrl: 'city-select.html',
})
export class CitySelectPage {

  simpleColumns;
  dependentColumns;
  @ViewChildren('cityGroup') cityGroup;
  @ViewChild(Content) content: Content;

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitySelectPage');
  }

  constructor(private navCtrl: NavController) {
    this.simpleColumns = [
    {
      name: 'col1',
      options: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' }
      ]
    },{
      name: 'col2',
      options: [
        { text: '1-1', value: '1-1' },
        { text: '1-2', value: '1-2' },
        { text: '2-1', value: '2-1' },
        { text: '2-2', value: '2-2' },
        { text: '3-1', value: '3-1' }
      ]
    },{
      name: 'col3',
      options: [
        { text: '1-1-1', value: '1-1-1' },
        { text: '1-1-2', value: '1-1-2' },
        { text: '1-2-1', value: '1-2-1' },
        { text: '1-2-2', value: '1-2-2' },
        { text: '2-1-1', value: '2-1-1' },
        { text: '2-1-2', value: '2-1-2' },
        { text: '2-2-1', value: '2-2-1' },
        { text: '2-2-2', value: '2-2-2' },
        { text: '3-1-1', value: '3-1-1' },
        { text: '3-1-2', value: '3-1-2' }
      ]
    }
  ];
    this.dependentColumns = [
    {
      options: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' }
      ]
    },{
      options: [
        { text: '1-1', value: '1-1', parentVal: '1' },
        { text: '1-2', value: '1-2', parentVal: '1' },
        { text: '2-1', value: '2-1', parentVal: '2' },
        { text: '2-2', value: '2-2', parentVal: '2' },
        { text: '3-1', value: '3-1', parentVal: '3' }
      ]
    }];
  }

}
