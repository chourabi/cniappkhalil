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
import { AdminVehiculesRequestAllComponent } from './admin-vehicules-request-all/admin-vehicules-request-all.component';
import { ParcManagerVehiculesRequestsComponent } from './parc-manager-vehicules-requests/parc-manager-vehicules-requests.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriversAddComponent } from './drivers-add/drivers-add.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, VehiculesListComponent, VehiculesAddComponent, VehiculesEditComponent, AddNewVehiculeRequestComponent, VehiculeRequestListComponent, AdminVehiculesRequestsComponent, RequestVehiculeDetailsComponent, AdminVehiculesRequestAllComponent, ParcManagerVehiculesRequestsComponent, DriversListComponent, DriversAddComponent, EmployeesManagemenetComponent, EmployeeAddComponent, DashComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
