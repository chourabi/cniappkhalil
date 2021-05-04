import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicule-request-list',
  templateUrl: './vehicule-request-list.component.html',
  styleUrls: ['./vehicule-request-list.component.css']
})
export class VehiculeRequestListComponent implements OnInit {

  requestList:any= [];
  passengers = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getVehiculesRequest().subscribe((data)=>{
      console.log(data);
      
      this.requestList = data;
    })
  }

}
