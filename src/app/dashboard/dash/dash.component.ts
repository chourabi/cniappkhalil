import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  requestList = [];
  canceledRequestList = [];
  approvedRequestList = [];
  pendingRequestList = [];
  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getVehiculesRequest().subscribe((data:any)=>{
      console.log(data);
      this.requestList = data.sort((a, b) => a.id - b.id).reverse();

      this.requestList.map((req)=>{
        if (req.request.status == 2) {
          this.approvedRequestList.push(req);
        }else if( req.request.status == 0 ){
          this.pendingRequestList.push(req);
        }else if( req.request.status == 1 ){
          this.pendingRequestList.push(req);
        }
        else if( req.request.status == 3 ){
          this.canceledRequestList.push(req);
        }
        
        
      })


    })
  }

}
