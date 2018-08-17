import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Car } from '../models/car';
import { User } from '../models/User';
import { IValidState } from '../models/ivalidstate';
import { Order } from '../models/Order';
import { AppUser } from '../models/AppUser';
import { UserLogin } from '../models/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class DataService {

UserType:AppUser;  //Type of User can change after using login form
UserName:string="Guest"; //display in Header Component

setUserName () {
  if(this.UserType=AppUser.Visitor){
    this.UserName="Guest";
  }
}

userLogin:UserLogin;


RegiserUser:User;
currentCarOrder:Car;

currentCarOrderPrice:number=0;
currentCarOrderStartDate:Date;
currentCarOrderEndDate:Date;
currentDay:Date;


ErrorMessage:string="You Enter incomplete or Wrong Data\n Please try again";
OrderStaus:IValidState= {
  message:"order status",
   class:"regular",
   btnclass:"btn btn-primary disabled"
}


id:number=1;

isPreview:boolean;
imagepath:string="http://localhost:57445/api/carcatalog/GetImage/";
link:string="http://localhost:57445/api/carcatalog";







  constructor(private http:HttpClient) { 
    this.UserType=AppUser.Visitor;
    this.RegiserUser=new User();//for register form ngmodel stater
     this.userLogin=new UserLogin();

this.setUserName();

    this.currentDay=new Date();
    this.currentDay.setHours(0,0,0,0);


this.currentCarOrder=new Car();
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


addUOrder(order:Order,callback:(bool:boolean)=>void): void {
  this.http.post<boolean>("http://localhost:57445/api/carcatalog/adduser",JSON.stringify(order), { headers: {"content-type": "application/json" }}).subscribe(()=>{()=>{console.log("Post")}; callback(true);},
  ()=>{callback(false)});
}




calculatePrice() {


 
 

  this.currentCarOrderStartDate=new Date(this.currentCarOrderStartDate);
   this.currentCarOrderEndDate=new Date(this.currentCarOrderEndDate);

 
  
let isDatesCorrect:boolean=this.currentCarOrderStartDate!=undefined && this.currentCarOrderEndDate!=undefined
&& this.currentCarOrderEndDate>=this.currentCarOrderStartDate
&& this.currentCarOrderStartDate.getTime()>=this.currentDay.getTime()
&& this.currentCarOrderEndDate.getTime()>=this.currentDay.getTime()

let RentDays:number=1;


if(!isDatesCorrect){
this.OrderStaus.message=this.ErrorMessage;
this.OrderStaus.class="wrongvalues";
}



else {
  this.OrderStaus.message="Order Status";
  this.OrderStaus.class="regular";
  this.OrderStaus.btnclass="btn btn-primary active"
  //this.currentCarOrderPrice=this.currentCarOrder.PricePerDay*(this.currentCarOrderEndDate.getTime()-this.currentCarOrderStartDate.getTime())/(24*3600*1000*7);
  
  var timeDiff = Math.abs(this.currentCarOrderStartDate.getTime() - this.currentCarOrderEndDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));



/* console.log(diffDays+1);
console.log(this.currentCarOrder.PricePerDay); */

  this.currentCarOrderPrice=this.currentCarOrder.PricePerDay*(diffDays+1);

}

}

}

