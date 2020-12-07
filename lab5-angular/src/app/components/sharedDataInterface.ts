import { Injectable } from '@angular/core';
import { env } from 'process';
//import { BehaviorSubject } from 'rxjs';
import { environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface user {
  email: string
}

@Injectable()
export class DataService {

  // admin email is adminemail123@gmail.com
  // pass is same 

  private admin = "adminemail123@gmail.com";
  private managers = ["marcusdel2112@rogers.com", "adminemail123@gmail.com"]
  private users = [];
  private getAdminString: string = environment.dev.apiUrl + "/api/admin/get";
  private getManagersString: string = environment.dev.apiUrl + "/api/manager/get";
  private getUsersString: string = environment.dev.apiUrl + "/api/user/get";
  // might need to do this
  //currentManagers = this.managers.asObservable();
  //currentAdmin = this.admin.asObservable();

  constructor(private http: HttpClient) { }

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

  // might break cuz theres more prperties than just user
  getManagers(){
    this.getManagersFromApi().subscribe(returnedObj => {
      for(let object of returnedObj){
        this.managers.push(object.email);
      }
      console.log(this.managers);
    });
      return this.managers;
  }

  getUsers(){
    this.getUsersFromApi().subscribe(returnedObj => {
      for(let object of returnedObj){
        this.users.push(object.email);
      }
    });
      return this.users;
  }

  addManager(email: string){
      if(!this.managers.includes(email)){
        this.managers.push(email);
      }
      else{
          console.log("email already included in managers lists");
      }
  }

  getManagersFromApi(): Observable<user[]> {
    return this.http.get<user[]>(this.getManagersString);
  };

  getUsersFromApi(): Observable<user[]> {
    return this.http.get<user[]>(this.getUsersString);

  }

}