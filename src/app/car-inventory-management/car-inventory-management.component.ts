import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Car } from '../../shared/models/car';

@Component({
  selector: 'app-car-inventory-management',
  templateUrl: './car-inventory-management.component.html',
  styleUrls: ['./car-inventory-management.component.css']
})
export class CarInventoryManagementComponent implements OnInit {

  constructor(private data:DataService) {

   }

  updateCarInfo (event,car:Car) {
  this.data.updateCarInfo(car);
   }


   deleteCar(event,carid:number){
   this.data.deleteCar(carid);
   location.reload();

   }


  ngOnInit() {
  }

}
