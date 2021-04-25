import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = []

  user:any;

  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    

    this.auth.info().subscribe((data:any)=>{
      this.user = data;
      
      const role = (data.roles[0].name);
      switch (role) {
        case "ROLE_ADMIN":
          this.menu = [{
            title: "Dashboard",
            counter: 0,
            link: '/dashboard/home/',
            subMenus: []
          },
  
          {
            title: "SUPER SECOND TEXT",
            counter: 0,
            link: '',
            subMenus: []
          },
          ]
          break;
  
        case "ROLE_PM":
          this.menu = [
          {
            title: "Dashboard",
            counter: 0,
            link: '/dashboard/home/',
            subMenus: []
          },
  
  
          ]
  
  
          break;  
  
        default:
          break;
      }
      
    })

 


  }





  logout(){
    /*this.auth.logout().subscribe((data:any)=>{
      console.log(data);
      if (data.success) {
        localStorage.clear();
        // router => signin

        this.router.navigate(['/signin'])

      }
      
    })*/
  }

  
}
