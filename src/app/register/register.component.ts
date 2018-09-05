import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private data:DataService) { 

  }
  submitted = false;
 
  onSubmit() { 
    this.submitted = true;
    this.data.AgencyInfo.RegisterUser.Role="Customer";
   this.data.addUser(this.data.AgencyInfo.RegisterUser);
  
  
  }


}
