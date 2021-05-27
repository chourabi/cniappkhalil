import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_PM") {
      this.router.navigate(['/error-page'])
    }
    this.getDriversList();
  }

  getDriversList(){
    this.api.getDriversList().subscribe((data)=>{
      console.log(data);
      
      this.drivers = data;
    })
  }

  deleteDriver(id){

  }

}
