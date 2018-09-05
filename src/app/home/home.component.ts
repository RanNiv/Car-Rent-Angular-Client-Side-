import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../shared/services/image.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private imagedata :ImageService) {

  }


}
