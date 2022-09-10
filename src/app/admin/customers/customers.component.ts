import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserParcel } from 'src/app/interface/user';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  // icons
  fatrash = faTrash;

  numberOfCustomers: number;
  customerName: string = '';
  customers: UserParcel[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers;

    if (this.customers.length > 0) {
      this.numberOfCustomers = this.customers.length;
    }
  }

  // search parcel
  searchParcel() {
    this.customers = this.customersService.searchParcel(this.customerName);
  }
}
