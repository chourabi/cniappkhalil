import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employees-managemenet',
  templateUrl: './employees-managemenet.component.html',
  styleUrls: ['./employees-managemenet.component.css']
})
export class EmployeesManagemenetComponent implements OnInit {

  employees:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.api.getEmployeesList().subscribe((data)=>{
      console.log(data);
      
      this.employees = data;
    })
  }

}
