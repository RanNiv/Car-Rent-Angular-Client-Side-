import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../shared/services/image.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

imagepath:string="";
imagepath2:string="";

  constructor(private imagedata :ImageService) { 
/* this.imagepath="http://localhost:57445/api/carcatalog/GetImage/0"; */
/* this.imagepath2="http://localhost:57445/api/carcatalog/GetImage/1"; */


  }

  ngOnInit() {
  }

}
