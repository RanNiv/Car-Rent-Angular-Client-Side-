import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Order } from '../../shared/models/Order';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  constructor(private data:DataService) { 
console.log("this is order page");
console.log(this.data.currentCarOrder);

    
  }


  postorder () {

    let order:Order=new Order();
    order.OrderStartDate=this.data.currentCarOrderStartDate;
    order.OrderReturnDate=this.data.currentCarOrderEndDate;
    order.UserID=this.data.RegiserUser.UserID;
    order.RegisterNumber=this.data.currentCarOrder.RegisterNumber;

  this.data.addUOrder(order,()=>{console.log("call back post order");

  });
}



  backtolist () {
    //prevent this part overflow the html part of the catalog 
    //Try to move to service
  this.data.isPreview=false;
 }



  ngOnInit() {
  }

}
