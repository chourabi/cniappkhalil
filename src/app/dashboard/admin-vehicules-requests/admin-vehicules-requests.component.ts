import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  deleteForm = new FormGroup({
    reason:new FormControl('',Validators.required)
  })


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }


    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse().filter((r)=> r.request.status == 0 )
    })
  }

  refresh(){
    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse().filter((r)=> r.request.status == 0 )
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
