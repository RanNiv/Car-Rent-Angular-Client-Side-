import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Order } from '../../shared/models/Order';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})
export class OrdersManagementComponent  {

  constructor(private data:DataService) { 

    this.data.getOrders(0);
  }
 
     updateOrderinfo (event,order:Order) {
    this.data.updateOrder(order);
     }
  
  
     deleteOrder(event,orderid:number){
     this.data.deleteOrder(orderid);
     location.reload();
  
     }

}
