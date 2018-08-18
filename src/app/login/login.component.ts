import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data:DataService) { }

  onSubmit(){

  console.log("submit");
  console.log(this.data.userLogin);
  this.data.CheckCredentials(this.data.userLogin);

  }


/* test area */

TestEdit () {
  this.data.Testput(this.data.RegiserUser);
console.log("TestEdit");


  }







TestDelete () {
  console.log("TestDelete");
this.data.doDELETE();

}




  ngOnInit() {
  }

}
