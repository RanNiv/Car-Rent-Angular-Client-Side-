import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  constructor(private data:DataService,) { 
this.data.getCUsers();
  }

updateUser () {


}


deleteUser (event,id:number) {

console.log(id);
this.data.deleteUser(id);
location.reload();


}
  

  ngOnInit() {
    
  }

}
