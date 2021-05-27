import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }




    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse();
    })
  }

  updateList(e){
    const f = e.target.value;

    if (f != '') {
      console.log(f);
      
      this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
        console.log(data);


        

       
        this.requestList.sort((a, b) => a.request.id - b.request.id).reverse();

        var tmp = [];

        this.requestList.forEach(r => {
          if (r.request.status == f) {
            tmp.push(r);
          }
        });


        this.requestList = tmp;
        
      })


    }else{
      this.refresh();
    }
    
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
