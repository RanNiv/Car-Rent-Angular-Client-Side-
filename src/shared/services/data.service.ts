import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Car } from '../models/car';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {


RegiserUser:User;
testService:string="this is a test";
currentPreviewCar:Car;

id:number=1;

isPreview:boolean;
imagepath:string="http://localhost:57445/api/carcatalog/GetImage/";
link:string="http://localhost:57445/api/carcatalog";


  constructor(private http:HttpClient) { 

this.RegiserUser=new User();
this.currentPreviewCar=new Car();
    this.isPreview=false;
    this.getCarCatalog();

  }


CarsCollection:Array<Car>;

  getCarCatalog(): void /*Observable<car>*/ {
    
     this.http.get("http://localhost:57445/api/carcatalog/GetAllCarCatalog").subscribe((x:Car[])=>{this.CarsCollection=x});

  } 




  addUser(user:User,callback:(bool:boolean)=>void): void {
    this.http.post<boolean>("http://localhost:57445/api/carcatalog/adduser",JSON.stringify(user), { headers: {"content-type": "application/json" }}).subscribe(()=>{()=>{console.log("Post")}; callback(true);},
    ()=>{callback(false)});
}


}
