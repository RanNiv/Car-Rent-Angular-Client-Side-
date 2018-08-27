import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-car-return',
  templateUrl: './car-return.component.html',
  styleUrls: ['./car-return.component.css']
})
export class CarReturnComponent implements OnInit {

  registerNumber:string;
  returnCar(){
  console.log("step1");
   this.data.Returncar(this.registerNumber);


  }


  constructor(private data:DataService) {

   }

  ngOnInit() {
  }

}
