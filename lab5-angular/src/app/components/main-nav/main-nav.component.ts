import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DataService } from "../sharedDataInterface";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  constructor(public auth: AuthService, private data: DataService) {}

  email;
  managers;
  admin;

  ngOnInit(): void {

    // getting user profile data so we can determin if we should render admin tab
    this.auth.user$.subscribe(
      (profile) => { 
        let profileJson = JSON.stringify(profile, null, 2);
        this.email = JSON.parse(profileJson).email;
    });

    // getting admin from sharedDataInterface
    //this.data.getAdmin.subscribe(message => this.message = message) cuz not an observable but might have to do that
    this.admin = this.data.getAdmin()

    // getting managers from sharedDataInterface
    this.managers = this.data.getManagers();
    console.log(this.managers);
  }

  // check if user is manager
  userIsManager(){
    if(this.managers.includes(this.email)){
      return true;
    }
    else{
       return false;
    }
  }
}
