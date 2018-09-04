import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private data:DataService) { 

console.log(data.AgencyInfo.RegisterUser);

  }




  submitted = false;
 
  onSubmit() { 
    this.submitted = true;
    this.data.AgencyInfo.RegisterUser.Role="Customer";
    console.log(this.data.AgencyInfo.RegisterUser);

   this.data.addUser(this.data.AgencyInfo.RegisterUser);
  
  
  }

 


  ngOnInit() {
  }

}
