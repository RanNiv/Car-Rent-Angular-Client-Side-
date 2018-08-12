import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

fullName:string;
id:string;


  submitted = false;
 
  onSubmit() { this.submitted = true;
  console.log("test submit");
  
  }

 


  ngOnInit() {
  }

}
