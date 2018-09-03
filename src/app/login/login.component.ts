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

  this.data.CheckCredentials(this.data.userLogin);
  

  }













  ngOnInit() {
  }

}
