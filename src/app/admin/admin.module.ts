import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { CreateParcelComponent } from './create-parcel/create-parcel.component';
import { CustomersComponent } from './customers/customers.component';

import { AuthGuard } from '../auth/service/auth.guard';
import { CanDeactivateGuard } from '../auth/service/can-deactivate.guard';
import { ParcelsService } from './services/parcels.service';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { CustomersService } from './services/customers.service';
import { UpdateParcelComponent } from './update-parcel/update-parcel.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'parcels',
        component: ParcelsComponent,
      },
      {
        path: 'create-parcel',
        component: CreateParcelComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'update-parcel/:parcelId',
        component: UpdateParcelComponent,
      },
      {
        path: 'parcel-details/:parcelId',
        component: ParcelDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ParcelsComponent,
    CreateParcelComponent,
    CustomersComponent,
    ParcelDetailsComponent,
    UpdateParcelComponent,
  ],
  providers: [CanDeactivateGuard, ParcelsService, CustomersService],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
