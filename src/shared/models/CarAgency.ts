import { Car } from "./car";
import { CarType } from "./CarType";
import { User } from "./User";
import { UserLogin } from "./UserLogin";
import { Order } from "./Order";

export class CarAgency {


CarsCollection:Array<Car>;
filterCarCollection:Array<Car>;
CarsTypesCollection:Array<CarType>=new Array<CarType>();
usersList:Array<User>;
UserName:string="Guest"; //display in Header Component
userLogin:UserLogin;
RegisterUser:User=new User();
currentCarOrder:Car;
currentCarOrderPrice:number=0;
currentCarOrderStartDate:Date;
currentCarOrderEndDate:Date;
currentDay:Date;
currentOrders:Array<Order>;
currentUserOrderDisplay:Order;


constructor () {
    this.RegisterUser=new User();
}




}