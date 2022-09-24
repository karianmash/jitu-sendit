import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faDollar,
  faLineChart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

import * as Actions from '../../ngrx-store/actions/parcel.actions';
import { Store } from '@ngrx/store';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import {
  numberOfDeliveries,
  numberOfParcels,
  totalParcelsPrice,
} from 'src/app/ngrx-store/selectors/parcel.selectors';

import { CustomersService } from '../services/customers.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // icons
  fatrack = faTruck;
  fachart = faLineChart;
  facurrency = faDollar;
  facustomers = faCartShopping;

  customers: number;

  // get total sales
  sales$ = this.store.select(totalParcelsPrice);
  // number of orders
  orders$ = this.store.select(numberOfParcels);
  // number of deliveries
  deliveries$ = this.store.select(numberOfDeliveries);

  constructor(
    private customersService: CustomersService,
    private authService: AuthService,
    private store: Store<ParcelState>
  ) {}

  ngOnInit(): void {
    // number of customers
    this.customers = this.customersService.getCustomers.length;
    // get parcels
    this.loadParcels();

    this.authService.getUsers().subscribe((users) => {
      this.customers = users.length;
    });
  }

  loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }
}
