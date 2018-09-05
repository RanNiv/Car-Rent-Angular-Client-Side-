import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Car } from '../models/car';
import { User } from '../models/User';
import { IValidState } from '../models/ivalidstate';
import { Order } from '../models/Order';
import { UserLogin } from '../models/UserLogin';
import { CarType } from '../models/CarType';
import { CarAgency } from '../models/CarAgency';




@Injectable({
  providedIn: 'root'
})
export class DataService {

AgencyInfo:CarAgency=new CarAgency();
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
currentDay:Date;
returnedCarPrice:number;

  constructor(private http:HttpClient) { 
     this.currentDay=new Date();
     this.currentDay.setHours(0,0,0,0);
      this.AgencyInfo.RegisterUser=new User();//for register form ngmodel stater 
      this.AgencyInfo.userLogin=new UserLogin();
      this.AgencyInfo.currentDay=new Date();
      this.AgencyInfo.currentDay.setHours(0,0,0,0);
      this.AgencyInfo.currentCarOrder=new Car();
      this.isPreview=false;
      this.getCarCatalog();

  }

getCarCatalog(): void /*Observable<car>*/ {
     this.http.get(`${this.link}/GetAllCarCatalog`).subscribe((x:Car[])=>{this.AgencyInfo.CarsCollection=x;
      this.AgencyInfo.filterCarCollection=this.AgencyInfo.CarsCollection;
      

    });
} 


getCarsTypes(): void /*Observable<car>*/ {
  this.http.get(`${this.link}/GetAllCars`).subscribe((x:Car[])=>{

  let carTypes=new Set(x.map(m=>`${m.Manufacturer}-*-${m.Model}`));
  carTypes.forEach(x=>this.AgencyInfo.CarsTypesCollection.push(new CarType(x,true)));
  this.getCarCatalog();
  });
}

updateCarsForRent():void {
  let url = `${this.link}/updatecarsforrent`;
   this.http.put(url, JSON.stringify(this.AgencyInfo.CarsTypesCollection), { headers: {"content-type": "application/json" }})
  .subscribe((x)=>console.log(x));
}

addUser(user:User): void {
  this.http.post<User>(`${this.link}/adduser`,JSON.stringify(user), { headers: {"content-type": "application/json" }}).subscribe((x:User)=>{
    this.AgencyInfo.RegisterUser=x

  },
  
  (errors)=>{
let errorMessage:string="";
console.log(errors.error);

for (let errorText of errors.error )
errorMessage+=errorText+'\n';

alert (errorMessage);

  }
  
  ); 

  }

addUOrder(order:Order): void {
  this.http.post<boolean>(`${this.link}/addorder`,JSON.stringify(order), { headers: {"content-type": "application/json" }}).
  subscribe(()=>alert("Order Received"),()=>alert("Problem with the Order Please try again"));
  

}


updateOrder(order:Order):void {
  let url = `${this.link}/updateorder`;
   this.http.put(url, JSON.stringify(order), { headers: {"content-type": "application/json" }})
  .subscribe((x)=>console.log(x));

}


deleteOrder(orderid:number) {
  let url:string=`${this.link}/deleteorder/?orderid=${orderid}`;
  this.http.delete(url).subscribe(res => console.log(res.toString()));
}





getCUsers(): void /*Observable<car>*/ {
  this.http.get(`${this.link}/GetUsers`).subscribe((x:User[])=>{this.AgencyInfo.usersList=x;});
} 




calculatePrice() {
 this.AgencyInfo.currentCarOrderStartDate=new Date(this.AgencyInfo.currentCarOrderStartDate);
this.AgencyInfo.currentCarOrderEndDate=new Date(this.AgencyInfo.currentCarOrderEndDate);
let isDatesCorrect:boolean=this.AgencyInfo.currentCarOrderStartDate!=undefined && this.AgencyInfo.currentCarOrderEndDate!=undefined
&& this.AgencyInfo.currentCarOrderEndDate>=this.AgencyInfo.currentCarOrderStartDate
&& this.AgencyInfo.currentCarOrderStartDate.getTime()>=this.currentDay.getTime()
&& this.AgencyInfo.currentCarOrderEndDate.getTime()>=this.currentDay.getTime()
let RentDays:number=1;

if(!isDatesCorrect){
this.OrderStaus.message=this.ErrorMessage;
this.OrderStaus.class="wrongvalues";
}


else {
  this.OrderStaus.message="Order Status";
  this.OrderStaus.class="regular";
  this.OrderStaus.btnclass="btn btn-primary active"
  
  let timeDiff = Math.abs(this.AgencyInfo.currentCarOrderStartDate.getTime() - this.AgencyInfo.currentCarOrderEndDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  this.AgencyInfo.currentCarOrderPrice=this.AgencyInfo.currentCarOrder.PricePerDay*(diffDays+1);
}

}


CheckCredentials(user:UserLogin): void {
  let basicUrl=`${this.link}/GetUserName`;
  let apiURL = `${basicUrl}?name=${user.name}&&password=${user.password}`;
  this.http.get(apiURL).subscribe((x:User)=>{this.AgencyInfo.RegisterUser=x;});
}




getOrders (userid:number) {

  let basicUrl=`${this.link}/GetOrders`;
  let apiURL = `${basicUrl}?id=${userid}`;
    this.http.get(apiURL).subscribe((x:Array<Order>)=>{ this.AgencyInfo.currentOrders=x;
    if(userid!=0)
    this.AgencyInfo.currentUserOrderDisplay=this.AgencyInfo.currentOrders.find(x=>x.OrderID==userid);
    });
}


getUserOrder (orderid:number) {

    let basicUrl=`${this.link}/GetUserOrder`;
    let apiURL = `${basicUrl}?id=${orderid}`;
      this.http.get(apiURL).subscribe((x:Order)=>{ this.AgencyInfo.currentUserOrderDisplay=x;});
  }


Returncar(regiserNumber:string):void {

  let url = `${this.link}/ReturnCar?registerNumber=${regiserNumber}`;
 this.http
   .put(url, JSON.stringify(this.AgencyInfo.RegisterUser), { headers: {"content-type": "application/json" }})
   .subscribe((price:number)=>this.returnedCarPrice=price),
   ()=>alert("Error");
   
   ;

}

updateCarInfo (car:Car) {
  let url = `${this.link}/EditCarData?car=${car}`;
  return this.http
  .put(url, JSON.stringify(car), { headers: {"content-type": "application/json" }})
  .subscribe((x)=>console.log(x));
}



  deleteUser(id:number) {
    console.log("DELETE");
    console.log(id);
    let url:string=`${this.link}/deleteuser/?userid=${id}`;
    this.http.delete(url).subscribe(res => console.log(res.toString()));
  }


  deleteCar(carid:number) {
    let url:string=`${this.link}/deletecar/?carid=${carid}`;
    this.http.delete(url).subscribe(res => console.log(res.toString()));
  }


}
   











