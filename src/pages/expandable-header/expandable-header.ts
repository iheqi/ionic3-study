import { Component, ViewChild, Input, ElementRef, Renderer } from '@angular/core';
import { Content } from 'ionic-angular';
//ng4已经弃用Renderer改用Renderer2，但也兼容

@Component({
  selector: 'page-expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderPage {

  @Input('scrollArea') scrollArea: any;
  //@Input('headerHeight') headerHeight: number;
  @ViewChild(Content) content:Content;
  newHeaderHeight: any;
  headerHeight=150;
  /*expandable:boolean = true;
  @ViewChild(Content) content: Content;
  constructor(
  	public cd:ChangeDetectorRef
  ) {}
  check(){
  	if(this.content.scrollTop>250){
        this.expandable = false;
    }else{
    	this.expandable = true;
    }
    this.cd.detectChanges();
  }*/
  constructor(public element: ElementRef, public renderer: Renderer) {
 
  }
 
  /*ngAfterViewInit(){
 	let myEle = document.getElementById("list");
    this.renderer.setElementStyle(myEle,'height',this.headerHeight + 'px');
 
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
 
  }*/
 
  resizeHeader(){
 
    //ev.domWrite(() => {
 
      this.newHeaderHeight = this.headerHeight - this.content.scrollTop;
 
      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }  
 
      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
 
    //});
 
  }

}
