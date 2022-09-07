import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ParcelsComponent } from './parcels/parcels.component';

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
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, HomeComponent, ParcelsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(adminRoutes)],
  exports: [DashboardComponent, HomeComponent, RouterModule],
})
export class AdminModule {}
