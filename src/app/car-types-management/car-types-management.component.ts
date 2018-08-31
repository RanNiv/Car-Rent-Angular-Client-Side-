import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-car-types-management',
  templateUrl: './car-types-management.component.html',
  styleUrls: ['./car-types-management.component.css']
})
export class CarTypesManagementComponent implements OnInit {

  constructor(private data:DataService) { }

  submittypes() {
  this.data.updateCarsForRent();

  }

  ngOnInit() {
  }

}
