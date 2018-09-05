import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Car } from '../../shared/models/car';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent  {

optionList:Array<string>=new Array<string>();
FilterSearchOption:string;
filterCarCollection:Array<Car>;  


constructor(private data:DataService) { 
this.data.isPreview=false;
 this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection;

    this.optionList.push("Show All Results");
    this.optionList.push("Gear");
    this.optionList.push("Year");
    this.optionList.push("Manufacturer");
    this.optionList.push("Model");
    this.optionList.push("Free Text");


    

  }

searchValue:string;

setSearchText (option:string) {
    this.FilterSearchOption=option;
    if (option=="Gear")
    this.searchValue="Gear";


    else if (option=="Show All Results")
    this.searchValue="Show All Results";

    else
    this.searchValue="";

  }


search () {
 

switch (this.FilterSearchOption) {
case "Gear":
this.searchValue="Gear";
this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection.filter(x=>x.Gear==true);
break;

case "Year":
if (parseInt(this.searchValue)!=NaN)
this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection.filter(x=>x.Year==parseInt(this.searchValue));
break;

case "Manufacturer":
this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection.filter(x=>x.Manufacturer==this.searchValue);
break;

case "Model":
this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection.filter(x=>x.Model==this.searchValue);
break;

case "Show All Results":
this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection;
break;

case "Free Text":
this.data.AgencyInfo.filterCarCollection=this.data.AgencyInfo.CarsCollection.filter(x=>x.Manufacturer==this.searchValue||
  x.Model==this.searchValue||x.Year==parseInt(this.searchValue)||(x.Gear==true && this.FilterSearchOption=="Gear"));
break;


  } 


  }




}
