import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-drivers-add',
  templateUrl: './drivers-add.component.html',
  styleUrls: ['./drivers-add.component.css']
})
export class DriversAddComponent implements OnInit {

  driverForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)
    
  })
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM") {
      this.router.navigate(['/error-page'])
    }

  }

  addNow(){
    this.api.addNewDriver(this.driverForm.value).subscribe((data)=>{
      console.log(data);
      this.driverForm.reset();
      this.router.navigate(['/dashboard/home/parc-drivers'])
      
    },(err)=>{
      alert("Something went wrong, please try again.")
    })
  }
}
