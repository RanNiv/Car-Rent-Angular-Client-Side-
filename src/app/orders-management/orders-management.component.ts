import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Order } from '../../shared/models/Order';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})
export class OrdersManagementComponent implements OnInit {

  constructor(private data:DataService) { 

    console.log("OrdersManagementComponent");
    this.data.getOrders(0);
    console.log(this.data.AgencyInfo.currentOrders);
  }


 
     updateOrderinfo (event,order:Order) {
    this.data.updateOrder(order);
     }
  
  
     deleteOrder(event,orderid:number){
     this.data.deleteOrder(orderid);
     location.reload();
  
     }




  ngOnInit() {
  }

}
