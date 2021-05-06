import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-parc-manager-vehicules-requests',
  templateUrl: './parc-manager-vehicules-requests.component.html',
  styleUrls: ['./parc-manager-vehicules-requests.component.css']
})
export class ParcManagerVehiculesRequestsComponent implements OnInit {


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
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse().filter((r)=> r.request.status == 1 )
    })
  }

  refresh(){
    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse().filter((r)=> r.request.status == 1 )
    })
  }


  preConfirm(id){
    console.log(id);
    this.idSelectedRequest = id;

    
  }



  confirmRequest(){

    this.api.approveParcVehiculesRequest(this.idSelectedRequest).subscribe((data)=>{
      this.refresh();
      
    },(err)=>{
      alert(err)
    })
    
  }

  refuseRequest(){
    const reason = this.deleteForm.value.reason;

    this.api.refuseParcVehiculesRequest(this.idSelectedRequest, reason).subscribe((data)=>{
      this.refresh();
    })

    
  }


}
