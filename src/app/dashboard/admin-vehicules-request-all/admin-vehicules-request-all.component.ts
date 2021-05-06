import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-vehicules-request-all',
  templateUrl: './admin-vehicules-request-all.component.html',
  styleUrls: ['./admin-vehicules-request-all.component.css']
})
export class AdminVehiculesRequestAllComponent implements OnInit {


  requestList:any= [];
  passengers = [];
  idSelectedRequest:any;

  deleteForm = new FormGroup({
    reason:new FormControl('',Validators.required)
  })


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse();
    })
  }

  refresh(){
    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse();
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

  refuseRequest(){
    const reason = this.deleteForm.value.reason;

    this.api.refuseVehiculesRequest(this.idSelectedRequest, reason).subscribe((data)=>{
      this.refresh();
    })

    
  }

}
