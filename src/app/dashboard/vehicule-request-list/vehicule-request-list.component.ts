import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicule-request-list',
  templateUrl: './vehicule-request-list.component.html',
  styleUrls: ['./vehicule-request-list.component.css']
})
export class VehiculeRequestListComponent implements OnInit {

  requestList:any= [];
  passengers = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getVehiculesRequest().subscribe((data:any)=>{
      console.log(data);

      
      this.requestList = data.sort((a, b) => a.id - b.id).reverse();
    })
  }

  updateList(e){
    const f = e.target.value;

    if (f != '') {
      console.log(f);
      
      this.api.getVehiculesRequest().subscribe((data:any)=>{
        this.requestList = data;
        console.log(data);


        

       
        this.requestList.sort((a, b) => a.request.id - b.request.id).reverse();

        var tmp = [];

        for (let j = 0; j < this.requestList.length; j++) {
          const req = this.requestList[j];

          if (req.request.status == f) {
            tmp.push(req);
          }
          
        }


        console.log(tmp);
        
        this.requestList = tmp;
        
      })


    }else{
      this.api.getVehiculesRequest().subscribe((data:any)=>{
        console.log(data);
  
        
        this.requestList = data.sort((a, b) => a.id - b.id).reverse();
      })
    }
    
  }


  deleteRequest(id){
    if (confirm("do you really wanna delete this item?")) {
      this.api.deleteRequest(id).subscribe((data)=>{

        this.api.getVehiculesRequest().subscribe((data:any)=>{
          console.log(data);
          this.requestList = data.sort((a, b) => a.id - b.id).reverse();
        })


      })
    }
  }


  clearHistory(){
    if (confirm("Are you sure you want to clear your old requests histoy ?")) {
        this.api.clearRequestsHistory().subscribe((data)=>{
          alert("Your request history is cleared");
          this.api.getVehiculesRequest().subscribe((data:any)=>{
            console.log(data);
      
            
            this.requestList = data.sort((a, b) => a.id - b.id).reverse();
          })
        })
    }
  }

}
