import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/service/auth.guard';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SentComponent } from './sent/sent.component';
import { ReceivedComponent } from './received/received.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';

import { NgxPaginationModule } from 'ngx-pagination';

const userRoutes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'sent-parcels',
        component: SentComponent,
      },
      {
        path: 'received-parcels',
        component: ReceivedComponent,
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
    SentComponent,
    ReceivedComponent,
    ParcelDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(userRoutes),
  ],
  exports: [RouterModule],
})
export class UserModule {}
