import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private admin = "doundidub@rogers.com";
  private managers = ["marcusdel2112@rogers.com", "doundidub@rogers.com"]

  // might need to do this
  //currentManagers = this.managers.asObservable();
  //currentAdmin = this.admin.asObservable();

  constructor() { }

  getAdmin(): string {
      return this.admin;
  }

  removeManager(email: string){

    // find and remove specified email
      for(let i = 0; i< this.managers.length; i++){
          if(email == this.managers[i]){
            this.managers.splice(i, 1);
          }
      }
  }

  getManagers(){
      return this.managers;
  }

  addManager(email: string){
      if(!this.managers.includes(email)){
        this.managers.push(email);
      }
      else{
          console.log("email already included in managers lists");
      }
  }

}