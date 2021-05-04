import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { VehiculesListComponent } from './vehicules-list/vehicules-list.component';
import { VehiculesAddComponent } from './vehicules-add/vehicules-add.component';
import { VehiculesEditComponent } from './vehicules-edit/vehicules-edit.component';
import { AddNewVehiculeRequestComponent } from './add-new-vehicule-request/add-new-vehicule-request.component';
import { VehiculeRequestListComponent } from './vehicule-request-list/vehicule-request-list.component';
import { AdminVehiculesRequestsComponent } from './admin-vehicules-requests/admin-vehicules-requests.component';
import { RequestVehiculeDetailsComponent } from './request-vehicule-details/request-vehicule-details.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, VehiculesListComponent, VehiculesAddComponent, VehiculesEditComponent, AddNewVehiculeRequestComponent, VehiculeRequestListComponent, AdminVehiculesRequestsComponent, RequestVehiculeDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
