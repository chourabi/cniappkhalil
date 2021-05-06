import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicules-list',
  templateUrl: './vehicules-list.component.html',
  styleUrls: ['./vehicules-list.component.css']
})
export class VehiculesListComponent implements OnInit {
  vehicules:any;
  constructor(private api:ApiService) { }


  getVehiculesList(){
    this.api.getVehiculesList().subscribe((data:any)=>{
      this.vehicules = data.sort((a,b)=> a.id - b.id)
    })
  }
  ngOnInit(): void {
    this.getVehiculesList();
  }

  deleteVehicule(id){
    if (confirm("Do you really wonna delete this item ?")) {
      this.api.deleteVehicule(id).subscribe((data)=>{
        this.getVehiculesList();
      },(err)=>{
        alert('Something went wrong, please try again.')
      })
    }
  }

}
