import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  adminName: string = "Ran Niv";
  currentYear:number=(new Date()).getFullYear();

 

}
