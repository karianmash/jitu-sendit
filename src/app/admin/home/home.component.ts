import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faDollar,
  faLineChart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { CustomersService } from '../services/customers.service';
import { ParcelsService } from '../services/parcels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fatrack = faTruck;
  fachart = faLineChart;
  facurrency = faDollar;
  facustomers = faCartShopping;

  sales: number;
  customers: number;
  orders: number;
  deliveries: number = 0;

  constructor(
    private parcelsService: ParcelsService,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    // get sales
    this.sales = this.parcelsService.getTotalParcelPrice();
    // number of customers
    this.customers = this.customersService.getCustomers.length;
    // number of orders
    this.orders = this.parcelsService.getParcels.length;

    // number of deliveries
    this.parcelsService.getParcels.forEach((parcel) => {
      if (parcel.status === 'Completed') {
        this.deliveries += 1;
      }
    });
  }
}
