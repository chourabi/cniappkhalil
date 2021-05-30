import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  drivers:any = [];


  deleteForm = new FormGroup({
    reason:new FormControl('',Validators.required)
  })

  approveForm = new FormGroup({
    driver_id:new FormControl('',Validators.required)
  })

  warningMessage = [];



  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM") {
      this.router.navigate(['/error-page'])
    }


    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse().filter((r)=> r.request.status == 1 )
    })

    this.getDrivers();

    this.checkWarningMessage();
  }


  checkWarningMessage(){
    this.api.getAdminVehiculesRequest().subscribe((data:any)=>{

      
      
     
      var toCheckDriversAndVehicules = this.requestList =data.sort((a, b) => a.request.id - b.request.id).reverse().filter((r)=> r.request.status == 1 )

      console.log("helo world",toCheckDriversAndVehicules);

      toCheckDriversAndVehicules.forEach(r => {
        //startDate: "2021-05-25"
        var requestDate = new Date(r.request.startDate);

        var today = new Date();

        console.log("dates",requestDate,today);
        

        if ( (today.getDate() == requestDate.getDate()) &&
        (today.getMonth() == requestDate.getMonth()) &&
        (today.getFullYear() == requestDate.getFullYear()) ) {

          if (r.request.driver != null) {
            this.warningMessage.push('You have a new vehicule request assigned to '+r.request.driver.name+' on the vehicule : '+r.request.vehicule.registrationPlate+' today at: '+r.request.startTime);
          }else{
            this.warningMessage.push('You have a new vehicule request with no driver on the vehicule : '+r.request.vehicule.registrationPlate+' today at: '+r.request.startTime);
          }
          
        }

      });

    })
  }











  getDrivers(){
    this.drivers = [];

    this.api.getDriversList().subscribe((data:any)=>{
      data.map((d)=>{
        if (d.onMission == false) {
          this.drivers.push(d);
        }
      })
      
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

    this.api.approveParcVehiculesRequest(this.idSelectedRequest,this.approveForm.value.driver_id).subscribe((data)=>{
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
