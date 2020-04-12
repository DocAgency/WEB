import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-welcome',
  templateUrl: './auth-welcome.component.html',
  styleUrls: ['./auth-welcome.component.scss']
})
export class AuthWelcomeComponent implements OnInit {

  title: string;
  description: string;

  constructor() { }

  ngOnInit() {

    this.title = "Welcome";
    this.description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ducimus. " 
    + "Porro fuga facilis eum architecto quas nulla nisi natus corporis quod, ipsam nesciunt optio! Delectus, est minus, expedita "
    + "repudiandae quas itaque placeat velit, facilis illum quae nulla totam quibusdam praesentium ex nesciunt aliquam! Ipsam maiores, iure ipsum culpa obcaecati et.";
    
  }

}
