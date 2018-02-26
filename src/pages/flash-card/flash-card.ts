import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  templateUrl: 'flash-card.html'
})
export class FlashCardPage {

  validateForm;
  constructor(public navCtrl: NavController,private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
  /*change1(){
    this.isCard = !this.isCard;
  }
  change2(){
    this.isCard = !this.isCard;
  }*/
  /* ngAfterViewChecked() {
    const frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
    const backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
    const h = ((frontH > backH) ? frontH :backH) + 'px';
    this.fcContainer.nativeElement.style.height = h;
    this.fcBack.nativeElement.style.height = h;
    this.fcFront.nativeElement.style.height = h;
  } */
}
