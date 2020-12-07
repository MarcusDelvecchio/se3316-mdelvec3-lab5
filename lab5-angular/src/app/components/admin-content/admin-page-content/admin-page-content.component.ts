import { Component, OnInit } from '@angular/core';
import { DataService } from '../../sharedDataInterface';

@Component({
  selector: 'app-admin-page-content',
  templateUrl: './admin-page-content.component.html',
  styles: [
  ]
})
export class AdminPageContentComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  getManagers(){
    let x = this.dataService.getManagers();
    console.log(x);
  }

  getUsers(){
    let x = this.dataService.getUsers();
    console.log(x);
  }

}
