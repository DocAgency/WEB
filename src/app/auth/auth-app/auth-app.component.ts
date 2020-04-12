import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-app',
  templateUrl: './auth-app.component.html',
  styleUrls: ['./auth-app.component.scss']
})
export class AuthAppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "Auth Component parent";
  }

}
