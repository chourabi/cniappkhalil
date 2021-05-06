import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewVehiculeRequestComponent } from './add-new-vehicule-request/add-new-vehicule-request.component';
import { AdminVehiculesRequestAllComponent } from './admin-vehicules-request-all/admin-vehicules-request-all.component';
import { AdminVehiculesRequestsComponent } from './admin-vehicules-requests/admin-vehicules-requests.component';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ParcManagerVehiculesRequestsComponent } from './parc-manager-vehicules-requests/parc-manager-vehicules-requests.component';
import { VehiculeRequestListComponent } from './vehicule-request-list/vehicule-request-list.component';
import { VehiculesAddComponent } from './vehicules-add/vehicules-add.component';
import { VehiculesEditComponent } from './vehicules-edit/vehicules-edit.component';
import { VehiculesListComponent } from './vehicules-list/vehicules-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component:HomeComponent , children:[
    { path:'vehicules', component:VehiculesListComponent },
    { path:'vehicules-add', component:VehiculesAddComponent },
    { path:'vehicules-edit/:id', component:VehiculesEditComponent },
    { path:'new-vehicule-request', component:AddNewVehiculeRequestComponent },
    { path:'vehicule-request-list', component:VehiculeRequestListComponent },
    { path:'admin-vehicule-request-list', component:AdminVehiculesRequestsComponent },
    { path:'parc-vehicule-request-list', component:ParcManagerVehiculesRequestsComponent },
    
    { path:'admin-vehicule-request-list-all', component:AdminVehiculesRequestAllComponent },
    { path:'admin-vehicule-request-details/:id', component:AdminVehiculesRequestsComponent },
    
    
    
    
    
    
    
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
