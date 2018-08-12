import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  constructor(private data:DataService) { 
console.log("this is order page");
console.log(this.data.currentPreviewCar);

    
  }


  backtolist () {
    //prevent this part overflow the html part of the catalog 
    //Try to move to service
  this.data.isPreview=false;
 }



  ngOnInit() {
  }

}
