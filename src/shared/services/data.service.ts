import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Car } from '../models/car';
import { User } from '../models/User';
import { IValidState } from '../models/ivalidstate';
import { Order } from '../models/Order';
import { UserLogin } from '../models/UserLogin';
import { Observable } from '../../../node_modules/rxjs';



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

getCarCatalog(): void /*Observable<car>*/ {
     this.http.get(`${this.link}/GetAllCarCatalog`).subscribe((x:Car[])=>{this.CarsCollection=x});
} 

addUser(user:User,callback:(bool:boolean)=>void): void {
  this.http.post<boolean>(`${this.link}/adduser`,JSON.stringify(user), { headers: {"content-type": "application/json" }}).subscribe(()=>{()=>{console.log("Post")}; callback(true);},
  ()=>{callback(false)});
}


addUOrder(order:Order,callback:(bool:boolean)=>void): void {
  this.http.post<boolean>(`${this.link}/adduser/addorder`,JSON.stringify(order), { headers: {"content-type": "application/json" }}).subscribe(()=>{()=>{console.log("Post")}; callback(true);},
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

currentUserOrders:Array<Order>;
currentUserOrderDisplay:Order;

getOrders (id:number=0) {
  let basicUrl=`${this.link}/GetOrders`;
  let apiURL = `${basicUrl}?id=${this.RegiserUser.UserID}`;
    this.http.get(apiURL).subscribe((x:Array<Order>)=>{ this.currentUserOrders=x;
    if(id!=0)
    this.currentUserOrderDisplay=this.currentUserOrders.find(x=>x.OrderID==id);
    
    });
}




 Testput(user: User) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.link}/TestPut/${user.UserID}`;

  return this.http
   .put(url, JSON.stringify(user), { headers: {"content-type": "application/json" }})
   .subscribe((x:User)=>{this.RegiserUser=x;console.log(x)});
            
}


  doDELETE() {
    console.log("DELETE");
    let url:string=`${this.link}/deleteuser/?userid=1`;
    let search = new URLSearchParams();
    search.set('userid', '1');
   // search.set('limit', 25);
    this.http.delete(url).subscribe(res => console.log(res.toString()));
  }




/* TestDelete(userid:number) :void {

  console.log(userid);
  let url:string=`${this.link}/deleteuser`;

  console.log(url);
    this.http.delete(url);
            
} */









}
   











