import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-new-vehicule-request',
  templateUrl: './add-new-vehicule-request.component.html',
  styleUrls: ['./add-new-vehicule-request.component.css']
})
export class AddNewVehiculeRequestComponent implements OnInit {

  user:any = {};
  employees:any = [];
  selectedPassengers = [];
  vehicules = [];
  
  


  vehiculeForm = new FormGroup({
    //vehicule_id : new FormControl('',Validators.required),
    resaon : new FormControl('',Validators.required),
    
    start_location : new FormControl('',Validators.required),
    start_date : new FormControl('',Validators.required),
    start_time : new FormControl('',Validators.required),
    
    arrival_location : new FormControl('',Validators.required),
    Arrival_date : new FormControl('',Validators.required),
    Arrival_time : new FormControl('',Validators.required),
    
    cargo : new FormControl(''),
    selected_passenger : new FormControl(''),

  })


  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    

    this.auth.info().subscribe((data:any)=>{
      console.log(data);
      this.user = data;

    });
    this.api.getVehiculesList().subscribe((data:any)=>{
      console.log(data);
      this.vehicules = data.filter((v)=> v.isOut == false);

    });
    

    this.api.getEmployeesList().subscribe((data)=>{
      console.log(data);
      
      this.employees = data;
    })



  }

  addNow(){
    const vehicule_id  = this.vehiculeForm.value.vehicule_id
    const start_location = this.vehiculeForm.value.start_location
    const start_date = this.vehiculeForm.value.start_date
    const arrival_location = this.vehiculeForm.value.arrival_location
    const Arrival_date = this.vehiculeForm.value.Arrival_date
    const Arrival_time = this.vehiculeForm.value.Arrival_time
    const start_time = this.vehiculeForm.value.start_time
    const cargo = this.vehiculeForm.value.cargo
    const resaon = this.vehiculeForm.value.resaon
    const id = this.user.id;
    
    
    const tmpPassengersList = this.selectedPassengers.map((p)=>  p.id);
    var request = {
      vehicule_id:vehicule_id,
      resaon:resaon,
      start_location:start_location,
      start_date:start_date,
      start_time:start_time,
      arrival_location:arrival_location,
      arrival_date:Arrival_date,
      arrival_time:Arrival_time,
      cargo:cargo,
      passengers : tmpPassengersList,
      employee_id:id
      
    }

    console.log(request);

    this.api.addNewVehiculeRequest(request).subscribe((data:any)=>{
      console.log(data);
      
      if (data.success == true) {
        this.router.navigate(['/dashboard/home/vehicule-request-list'])
      }else{
        alert(data.message);
      }
    },(err)=>{
      alert('Something went wrong, please try again');
      
    })
    
  }

  addSelectedPassenger(){
    const id = this.vehiculeForm.value.selected_passenger;

    if (id!='') {
      console.log(id);

      for (let i = 0; i < this.employees.length; i++) {
        const employee = this.employees[i];
        if (employee.id == id) {
          
          let isInList = false;

          for (let j = 0; j < this.selectedPassengers.length; j++) {
            if (this.selectedPassengers[j].id == id) {
              isInList = true;
            }
            
          }

          if (! isInList) {
            this.selectedPassengers.push(employee);
          }

        }
      }
    }
    
  }

  deletePassender(i){
    console.log(i);
    
    this.selectedPassengers.splice(i,1);
    
  }

}
