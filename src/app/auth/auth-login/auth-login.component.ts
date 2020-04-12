import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  title: string;
  description: string;
  email: string;
  password: string;
  submitted: boolean;

  constructor() { }

  ngOnInit() {
    this.title = "Login";
    this.description = "Connection to the app.";

    this.email = "";
    this.password = "";
    this.submitted = false;
    console.log(this.title );
    console.log(this.email );
    console.log(this.title );
  }

  onSubmit() { 
    this.submitted = true; 
    console.log(this.email);
    console.log(this.password);
  }

}
