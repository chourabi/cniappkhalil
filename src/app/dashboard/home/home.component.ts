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
      localStorage.setItem('role',data.roles[0].name);
      
      this.user = data;
      
      const role = (data.roles[0].name);
      switch (role) {
        case "ROLE_ADMIN":
          this.menu = [{
            title: "Dashboard",
            counter: 0,
            link: '/dashboard/home/dash',
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
          {
            title: "Employees",
            counter: 0,
            link: '/dashboard/home/admin-employees',
            subMenus: []
          },

          {
            title: "historic de mes demandes",
            counter: 0,
            link: '/dashboard/home/vehicule-request-list',
            subMenus: []
          },
          {
            title: "New vehicule request",
            counter: 0,
            link: '/dashboard/home/new-vehicule-request',
            subMenus: []
          },
          
          


          ]
          break;
  
        case "ROLE_PM":
          this.menu = [
            {
              title: "Dashboard",
              counter: 0,
              link: '/dashboard/home/dash',
              subMenus: []
            },
            {
              title: "Vehicules",
              counter: 0,
              link: '/dashboard/home/vehicules',
              subMenus: []
            },
            {
              title: "New parc vehicules request",
              counter: 0,
              link: '/dashboard/home/parc-vehicule-request-list',
              subMenus: []
            },
            {
              title: "Historic of all vehicules request",
              counter: 0,
              link: '/dashboard/home/parc-vehicule-request-list-all',
              subMenus: []
            },


            
            {
              title: "Parc drivers",
              counter: 0,
              link: '/dashboard/home/parc-drivers',
              subMenus: []
            },

            {
              title: "historic de mes demandes",
              counter: 0,
              link: '/dashboard/home/vehicule-request-list',
              subMenus: []
            },
            {
              title: "New vehicule request",
              counter: 0,
              link: '/dashboard/home/new-vehicule-request',
              subMenus: []
            },
            
              
  
  
          ]
  
          break;  
          case "ROLE_USER":
            this.menu = [
              {
                title: "Acceuil",
                counter: 0,
                link: '/dashboard/home/dash',
                subMenus: []
              },
              {
                title: "historic de mes demandes",
                counter: 0,
                link: '/dashboard/home/vehicule-request-list',
                subMenus: []
              },
              {
                title: "New vehicule request",
                counter: 0,
                link: '/dashboard/home/new-vehicule-request',
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

  newNotifcationsCount = [];


  getNotification(){
    this.api.notificationsList().subscribe((data:any)=>{
      console.log(data);

      data.forEach(n => {
        if (n.seen == false) {
          this.newNotifcationsCount.push(n);
        }
      });
      
      this.notifications = data.reverse();
    })
  }

  updateNotifications(){
    this.api.updateNotifications().subscribe((data)=>{
      this.getNotification();
    });
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
