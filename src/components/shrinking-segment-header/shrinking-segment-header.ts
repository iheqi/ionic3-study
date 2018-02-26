import { Component, Input, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'shrinking-segment-header',
  templateUrl: 'shrinking-segment-header.html'
})
export class ShrinkingSegmentHeaderComponent {
  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;
  newHeaderHeight: any;

  constructor(public element: ElementRef, public renderer2: Renderer2) {
    console.log('Hello ShrinkingSegmentHeaderComponent Component');
  }
    // 模板中的元素已创建完成
  ngAfterViewInit(){
    // https://segmentfault.com/a/1190000010326100#articleHeader5
    // 在 Angular 4.x+ 版本，我们使用 Renderer2 替代 Renderer
    // 在浏览器环境中，native 元素通常是指 整个 DOM 元素，这里则是指 整个收缩组件
    // 设置初始高度

    // this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    this.renderer2.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    
    // 监听
    this.scrollArea.ionScroll.subscribe(() => {
      this.resizeHeader(this.scrollArea);
    });
    // 不知为何无法使用listen(),报错：element.addEventListener is not a function
    // this.renderer2.listen(this.scrollArea,'ionScroll',()=>{
      // this.resizeHeader(this.scrollArea);
    // })
    
  }
  resizeHeader(ele){
    //ev.domWrite(() => {
      this.newHeaderHeight = this.headerHeight - ele.scrollTop;
      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }  
      this.renderer2.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
    //});
  }
}
