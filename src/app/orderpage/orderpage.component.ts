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


    
  }


  postorder () {

    let order:Order=new Order();
    order.OrderStartDate=this.data.AgencyInfo.currentCarOrderStartDate;
    order.OrderReturnDate=this.data.AgencyInfo.currentCarOrderEndDate;
    order.UserID=this.data.AgencyInfo.RegisterUser.UserID;
    order.RegisterNumber=this.data.AgencyInfo.currentCarOrder.RegisterNumber;
    

    

  this.data.addUOrder(order);


}



  backtolist () {
    //prevent this part overflow the html part of the catalog 
    //Try to move to service
  this.data.isPreview=false;
 }



  ngOnInit() {
  }

}
