import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Car } from '../models/car';
import { User } from '../models/User';
import { IValidState } from '../models/ivalidstate';
import { Order } from '../models/Order';
import { UserLogin } from '../models/UserLogin';
import { Observable } from '../../../node_modules/rxjs';
import { CarType } from '../models/CarType';




@Injectable({
  providedIn: 'root'
})
export class DataService {


UserName:string="Guest"; //display in Header Component



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
   
     this.RegiserUser=new User();//for register form ngmodel stater
    
     this.userLogin=new UserLogin();
    this.currentDay=new Date();
    this.currentDay.setHours(0,0,0,0);


this.currentCarOrder=new Car();
    this.isPreview=false;
    this.getCarCatalog();

  }

CarsCollection:Array<Car>;
CarsTypesCollection:Array<CarType>=new Array<CarType>();
usersList:Array<User>;

getCarCatalog(): void /*Observable<car>*/ {
     this.http.get(`${this.link}/GetAllCarCatalog`).subscribe((x:Car[])=>{this.CarsCollection=x;
      let carTypes=  new Set(this.CarsCollection.map(m=>`${m.Manufacturer}-*-${m.Model}`));

      console.log(carTypes);
      carTypes.forEach(x=>this.CarsTypesCollection.push(new CarType(x,true)));

      console.log(this.CarsTypesCollection);

    });
} 

updateCarsForRent():void {
  console.log("-----")
console.log(this.CarsTypesCollection);

  let url = `${this.link}/updatecarsforrent`;
   this.http.put(url, JSON.stringify(this.CarsTypesCollection), { headers: {"content-type": "application/json" }})
  .subscribe((x)=>console.log(x));

}

addUser(user:User): void {
  this.http.post<boolean>(`${this.link}/adduser`,JSON.stringify(user), { headers: {"content-type": "application/json" }}).subscribe((response)=>{
    
    alert ("You Log In The System");
    location.reload();
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

addUOrder(order:Order,callback:(bool:boolean)=>void): void {
  this.http.post<boolean>(`${this.link}/addorder`,JSON.stringify(order), { headers: {"content-type": "application/json" }}).subscribe(()=>{()=>{console.log("Post")}; callback(true);},
  ()=>{callback(false)});
}


updateOrder(order:Order):void {
console.log("-----")
console.log(order);

  let url = `${this.link}/updateorder`;
   this.http.put(url, JSON.stringify(order), { headers: {"content-type": "application/json" }})
  .subscribe((x)=>console.log(x));

}


deleteOrder(orderid:number) {
  console.log("DELETE");

  let url:string=`${this.link}/deleteorder/?orderid=${orderid}`;
  console.log(url);
  this.http.delete(url).subscribe(res => console.log(res.toString()));
}





getCUsers(): void /*Observable<car>*/ {
  this.http.get(`${this.link}/GetUsers`).subscribe((x:User[])=>{this.usersList=x;});
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
  
  let timeDiff = Math.abs(this.currentCarOrderStartDate.getTime() - this.currentCarOrderEndDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  this.currentCarOrderPrice=this.currentCarOrder.PricePerDay*(diffDays+1);
}

}


CheckCredentials(user:UserLogin): void {

  let basicUrl=`${this.link}/GetUserName`;
  let apiURL = `${basicUrl}?name=${user.name}&&password=${user.password}`;


    this.http.get(apiURL).subscribe((x:User)=>{this.RegiserUser=x;});
}

currentOrders:Array<Order>;
currentUserOrderDisplay:Order;


getOrders (userid:number) {
console.log("from getOrders");
console.log(userid);
  let basicUrl=`${this.link}/GetOrders`;
  let apiURL = `${basicUrl}?id=${userid}`;
    this.http.get(apiURL).subscribe((x:Array<Order>)=>{ this.currentOrders=x;
    if(userid!=0)
    this.currentUserOrderDisplay=this.currentOrders.find(x=>x.OrderID==userid);
    });
}


getUserOrder (orderid:number) {
  console.log("from getUserOrder");
  console.log(orderid);
    let basicUrl=`${this.link}/GetUserOrder`;
    let apiURL = `${basicUrl}?id=${orderid}`;
      this.http.get(apiURL).subscribe((x:Order)=>{ this.currentUserOrderDisplay=x;});
  }






Returncar(regiserNumber:string) {

  console.log("step 2");
  let url = `${this.link}/ReturnCar?registerNumber=${regiserNumber}`;
console.log(url);
return this.http
   .put(url, JSON.stringify(this.RegiserUser), { headers: {"content-type": "application/json" }})
   .subscribe((response)=>{console.log(response)});

}

updateCarInfo (car:Car) {

  console.log(car);
  let url = `${this.link}/EditCarData?car=${car}`;
  return this.http
  .put(url, JSON.stringify(car), { headers: {"content-type": "application/json" }})
  .subscribe((x)=>console.log(x));
}



  deleteUser(id:number) {
    console.log("DELETE");
    console.log(id);
    let url:string=`${this.link}/deleteuser/?userid=${id}`;
    console.log(url);
    this.http.delete(url).subscribe(res => console.log(res.toString()));
  }


  deleteCar(carid:number) {
    console.log("DELETE");
  
    let url:string=`${this.link}/deletecar/?carid=${carid}`;
    console.log(url);
    this.http.delete(url).subscribe(res => console.log(res.toString()));
  }


}
   











