import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-car-return',
  templateUrl: './car-return.component.html',
  styleUrls: ['./car-return.component.css']
})
export class CarReturnComponent  {

  registerNumber:string;
  rentPrice:number;
  returnCar(){
   this.data.Returncar(this.registerNumber);
  }


  constructor(private data:DataService) {
   }

  

}
