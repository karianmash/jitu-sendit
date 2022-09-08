import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { CreateParcelComponent } from './create-parcel/create-parcel.component';
import { CustomersComponent } from './customers/customers.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
        path: 'deliveries',
        component: DeliveriesComponent,
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
    DeliveriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
