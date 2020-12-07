import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies-content',
  templateUrl: './policies-content.component.html',
  styles: [
  ]
})
export class PoliciesContentComponent implements OnInit {

  constructor() { 
    this.showDCMA = false;
    this.showPrivacy = false;
    this.showAcceptableUse = false;
  }

  showPrivacy;
  showAcceptableUse;
  showDCMA;

  ngOnInit(): void {
  }

  toggleDCMA(){
    if(this.showDCMA){
      this.showDCMA = false;
    }
    else{
      this.showDCMA = true;
    }
  }

  toggleShowAcceptableuse(){

    if(this.showAcceptableUse){
      this.showAcceptableUse = false;
    }
    else{
      this.showAcceptableUse = true;
    }
  }

  toggleShowPrivacy(){
    if(this.showPrivacy){
      this.showPrivacy = false;
    }
    else{
      this.showPrivacy = true;
    }
  }

}
