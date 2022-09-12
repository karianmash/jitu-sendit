import { Injectable } from '@angular/core';
import { UserParcel } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  private customers: UserParcel[] = [
    {
      username: 'Ian Macharia',
      email: 'ianmachariak17@gmail.com',
      parcelsSent: 20,
      parcelsReceived: 32,
      totalAmount: 20030,
    },
    {
      username: 'Christine Karimi',
      email: 'christine@gmail.com',
      parcelsSent: 3,
      parcelsReceived: 51,
      totalAmount: 31000,
    },
    {
      username: 'Ephraim Murimi',
      email: 'ian@gmail.com',
      parcelsSent: 20,
      parcelsReceived: 32,
      totalAmount: 20030,
    },
    {
      username: 'Samuel Mwangi',
      email: 'samuel@gmail.com',
      parcelsSent: 20,
      parcelsReceived: 32,
      totalAmount: 20030,
    },
    {
      username: 'Victor Bakali',
      email: 'victor@gmail.com',
      parcelsSent: 3,
      parcelsReceived: 51,
      totalAmount: 31000,
    },
  ];

  public get getCustomers() {
    return this.customers;
  }

  // search customer
  public searchCustomer(customerName: string) {
    return this.customers.filter(
      (customer) => customer.username == customerName
    );
  }
}
