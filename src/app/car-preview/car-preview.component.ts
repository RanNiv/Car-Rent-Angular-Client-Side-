import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Car } from '../../shared/models/car';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.css']
})
export class CarPreviewComponent implements OnInit {


/*  @Input() catalogPath:string; */

 @Input() car: Car;


  constructor(private data:DataService) {
   // this.data.imagepath=`${this.data.imagepath}${this.data.id}`;
  }



   displaypreview () {

   this.data.isPreview=true;
   this.data.AgencyInfo.currentCarOrder=this.car;

   }



   backtolist () {
      //prevent this part overflow the html part of the catalog 
      //Try to move to service
    this.data.isPreview=false;
   }



  ngOnInit() {
  }

}
