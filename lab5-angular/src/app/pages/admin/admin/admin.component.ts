import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DataService } from "../../../components/sharedDataInterface";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  constructor(public auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
  }

}
