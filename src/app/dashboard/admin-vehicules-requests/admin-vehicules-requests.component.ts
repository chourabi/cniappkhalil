import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-vehicules-requests',
  templateUrl: './admin-vehicules-requests.component.html',
  styleUrls: ['./admin-vehicules-requests.component.css']
})
export class AdminVehiculesRequestsComponent implements OnInit {

  requestList:any= [];
  passengers = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAdminVehiculesRequest().subscribe((data)=>{
      console.log(data);
      
      this.requestList = data;
    })
  }

  refresh(){
    this.api.getAdminVehiculesRequest().subscribe((data)=>{
      console.log(data);
      
      this.requestList = data;
    })
  }


  confirmRequest(id){
    console.log(id);
    this.api.approveVehiculesRequest(id).subscribe((data)=>{
      console.log(data);
      this.refresh();
      
    })
    
  }

}
