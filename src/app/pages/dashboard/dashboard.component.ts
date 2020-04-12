import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  region: string;
  locality: string;
  agency: string;
  startdate: string;
  enddate: string;
  submitted: boolean;

  constructor() { }

  ngOnInit() {
    this.region = "";
    this.locality = "";
    this.agency = "";
    this.startdate = "";
    this.enddate = "";
    this.submitted = false;
    console.log("DashboardComponent");
    
  }

  onSubmit() { 
    this.submitted = true; 
    console.log(this.region);
    console.log(this.locality);
  }

}
