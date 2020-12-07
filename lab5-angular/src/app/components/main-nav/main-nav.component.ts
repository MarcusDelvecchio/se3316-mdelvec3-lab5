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
  admin = "mdelvec3@uwo.ca";  // todo backend

  ngOnInit(): void {

    // getting user profile data so we can determin if we should render admin tab
    this.auth.user$.subscribe(
      (profile) => { 
        let profileJson = JSON.stringify(profile, null, 2);
        this.email = JSON.parse(profileJson).email;
        console.log("user email:" + this.email);
    });

    // get admin
    this.assignAdmin();
    //this.data.getAdmin.subscribe(message => this.message = message) cuz not an observable but might have to do that
  }

  // MOVED OUTSIDE BC USER HAS TO BE LOGGED IN

  // getting managers from sharedDataInterface
  getManagers(){
    this.managers = this.data.getManagers();
    console.log(this.managers);
  }

  assignAdmin(){
    //this.admin = this.data.getAdmin();    // todo setup admin and manager backend
    this.admin = "mdelvec3@uwo.ca";
  }

  // check if user is manager
  userIsManager(){
    if(!this.email){
      return false;
    }
    if(!this.managers){
      this.getManagers();
      console.log("getting managers");
    }

    if(this.managers.includes(this.email)){
      return true;
    }
    else{
       return false;
    }
  }
}
