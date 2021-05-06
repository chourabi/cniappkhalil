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

  notifications:any = [];

  constructor(private api:ApiService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    

    this.auth.info().subscribe((data:any)=>{
      console.log(data);
      
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
            title: "New vehicules requests",
            counter: 0,
            link: '/dashboard/home/admin-vehicule-request-list',
            subMenus: []
          },
          {
            title: "All vehicules requests",
            counter: 0,
            link: '/dashboard/home/admin-vehicule-request-list-all',
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
            {
              title: "Vehicules",
              counter: 0,
              link: '/dashboard/home/vehicules',
              subMenus: []
            },
            {
              title: "Parc vehicules request",
              counter: 0,
              link: '/dashboard/home/parc-vehicule-request-list',
              subMenus: []
            },
            
              
  
  
          ]
  
          break;  
          case "ROLE_USER":
            this.menu = [
              {
                title: "Acceuil",
                counter: 0,
                link: '/dashboard/home/',
                subMenus: []
              },
              {
                title: "My vehicules requests",
                counter: 0,
                link: '/dashboard/home/vehicule-request-list',
                subMenus: []
              },
                
    
    
            ]
    
            break; 



          
  
        default:
          break;
      }
      
    },()=>{
      localStorage.clear();

        this.router.navigate(['/signin'])
    })


    this.getNotification();
 


  }

  getNotification(){
    this.api.notificationsList().subscribe((data:any)=>{
      console.log(data);
      
      this.notifications = data.reverse();
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

    localStorage.clear();
        // router => signin

        this.router.navigate(['/signin'])
  }

  
}
