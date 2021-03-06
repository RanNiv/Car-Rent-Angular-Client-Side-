import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Order } from '../../shared/models/Order';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent  {

  constructor(private data:DataService) { 
  }


  postOrder () {
    let order:Order=new Order();
    order.OrderStartDate=this.data.AgencyInfo.currentCarOrderStartDate;
    order.OrderReturnDate=this.data.AgencyInfo.currentCarOrderEndDate;
    order.UserID=this.data.AgencyInfo.RegisterUser.UserID;
    order.RegisterNumber=this.data.AgencyInfo.currentCarOrder.RegisterNumber;
  this.data.addUOrder(order);

}
  backToList () {
  this.data.isPreview=false;
 }

}
