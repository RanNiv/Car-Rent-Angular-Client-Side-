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

console.log(data.RegiserUser);

  }




  submitted = false;
 
  onSubmit() { 
    this.submitted = true;
    console.log(this.data.RegiserUser);

    this.data.addUser(this.data.RegiserUser
    //   ,()=>{console.log("call back post user")}
    );
  
  
  }

 


  ngOnInit() {
  }

}
