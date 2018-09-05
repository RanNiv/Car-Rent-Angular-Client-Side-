import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Car } from '../../shared/models/car';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.css']
})
export class CarPreviewComponent  {

 @Input() car: Car;
  constructor(private data:DataService) {
  }

   displaypreview () {

   this.data.isPreview=true;
   this.data.AgencyInfo.currentCarOrder=this.car;

   }

   backtolist () {
    this.data.isPreview=false;
   }


}
