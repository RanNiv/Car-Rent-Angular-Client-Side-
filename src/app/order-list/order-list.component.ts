import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent  {
  constructor(private data:DataService) {
    this.data.getOrders(this.data.AgencyInfo.RegisterUser.UserID);
   }



}
