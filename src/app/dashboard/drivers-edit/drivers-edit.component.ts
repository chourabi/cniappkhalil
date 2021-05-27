import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-drivers-edit',
  templateUrl: './drivers-edit.component.html',
  styleUrls: ['./drivers-edit.component.css']
})
export class DriversEditComponent implements OnInit {

  driverForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    onMission: new FormControl(false),
    
  })


  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.detailsDriver();
  }

  editnow(){
    const id = this.route.snapshot.params.id;
    if (confirm("are you sure you want update this item ?")) {
      this.api.updateDriver(id,this.driverForm.value).subscribe((data)=>{
        this.router.navigate(['/dashboard/home/parc-drivers'])
      })
    }

  }


  detailsDriver(){
    const id = this.route.snapshot.params.id;

    this.api.detailsDriver(id).subscribe((data:any)=>{
      console.log(data);
      delete data.id;

      this.driverForm.setValue(data)
      
    })
  }
}
