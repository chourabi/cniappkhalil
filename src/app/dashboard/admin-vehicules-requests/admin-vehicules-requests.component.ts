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
  idSelectedRequest:any;


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


  preConfirm(id){
    console.log(id);
    this.idSelectedRequest = id;

    
  }



  confirmRequest(){

    this.api.approveVehiculesRequest(this.idSelectedRequest).subscribe((data)=>{
      
      console.log(" test",data);
      this.refresh();
      
    },(err)=>{
      alert(err)
    })
    
  }

}
