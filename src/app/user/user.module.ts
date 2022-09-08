import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

const userRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: HomeComponent,
    //   },
    //   {
    //     path: 'parcels',
    //     component: ParcelsComponent,
    //   },
    //   {
    //     path: 'create-parcel',
    //     component: CreateParcelComponent,
    //   },
    //   {
    //     path: 'customers',
    //     component: CustomersComponent,
    //   },
    //   {
    //     path: 'deliveries',
    //     component: DeliveriesComponent,
    //   },
    // ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserModule {}
