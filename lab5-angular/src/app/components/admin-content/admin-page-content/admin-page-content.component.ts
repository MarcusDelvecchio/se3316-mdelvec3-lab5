import { Component, OnInit } from '@angular/core';
import { DataService } from '../../sharedDataInterface';
import { ConfigService } from '../../dataservice';

@Component({
  selector: 'app-admin-page-content',
  templateUrl: './admin-page-content.component.html',
  styles: [
  ]
})

export class AdminPageContentComponent implements OnInit {

  constructor(public dataService: DataService, public _configservice: ConfigService) { }
  reviewData;

  ngOnInit(): void {
    this.getReviewData();
  }

  getManagers(){
    let x = this.dataService.getManagers();
    console.log(x);
  }

  getUsers(){
    let x = this.dataService.getUsers();
    console.log(x);
  }

  getReviewData(){
    this._configservice.getReviewData().subscribe(data => {
      this.reviewData = data[data.length -1]["reviewData"];
      console.log("(getReviewData() response) recieved review data:");
      console.log(this.reviewData);
    });
  }

  toggleReviewHide(rev){

    let review = rev;
    console.log(review);

    if(review.hidden){
      for(let i = 0; i<this.reviewData.length; i++){
        if(this.reviewData[i].Id == review.Id){
          this.reviewData[i].hidden = false;
          console.log(this.reviewData[i].courseNum + " set to show")
        }
      }
    }else{
      for(let i = 0; i<this.reviewData.length; i++){
        if(this.reviewData[i].Id == review.Id){
          this.reviewData[i].hidden = true;
          console.log(this.reviewData[i].courseNum + " set to hide")
        }
      }
    }
    
    // update database
    this.postReviewData();
  }

  postReviewData(){
    this._configservice.postReviewData(this.reviewData).subscribe(data => {
     this.reviewData = data;
     this.reviewData= this.reviewData.reviewData;
     console.log("(response) updated data:");
     console.log(this.reviewData);
    });

  }



}
