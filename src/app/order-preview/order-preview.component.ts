import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/models/Order';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

order:Order;

localOrder:Order;
localId:number;
localRoute:string;
isPreview:boolean=false;;

  constructor(private data:DataService,private myActivatedRoute: ActivatedRoute) {


  this.myActivatedRoute.params.subscribe(x=>{this.localId=x.id});

this.data.getOrders(this.localId);


   }

 

  ngOnInit() {

  //this.order=this.data.currentUserOrders.find(x=>x.OrderID==1);

    /* this.myActivatedRoute.params.subscribe(x=>{this.localId=x.id});
    console.log(`ngOnInit: ${this.localId}`); */
  }

}
