export class CarType {
    Manufacturer:string;
    Model:string;
    IsForRent:boolean;

    constructor (type:string,isforrent:boolean) {
    this.Manufacturer=type.split("-*-")[0];
    this.Model=type.split("-*-")[1];
    this.IsForRent=isforrent;

    }



}