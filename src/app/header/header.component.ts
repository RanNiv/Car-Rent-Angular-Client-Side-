import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private data:DataService) { 

  }


logout() {
this.data.AgencyInfo.RegisterUser=new User();
  }

 

}
