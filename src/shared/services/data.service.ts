import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class DataService {

testService:string="this is a test";
currentPreviewCar:Car;

id:number=1;

isPreview:boolean;
imagepath:string="http://localhost:57445/api/carcatalog/GetImage/";

  constructor(private http:HttpClient) { 
this.currentPreviewCar=new Car();

    this.isPreview=false;
    this.getCarCatalog();

  }


CarsCollection:Array<Car>;

  getCarCatalog(): void /*Observable<car>*/ {
    
     this.http.get("http://localhost:57445/api/carcatalog/GetAllCarCatalog").subscribe((x:Car[])=>{this.CarsCollection=x});

  } 


}
