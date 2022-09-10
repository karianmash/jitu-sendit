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
      email: 'ian@gmail.com',
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
      username: 'Ian Macharia',
      email: 'ian@gmail.com',
      parcelsSent: 20,
      parcelsReceived: 32,
      totalAmount: 20030,
    },
    {
      username: 'Ian Macharia',
      email: 'ian@gmail.com',
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
      username: 'Ian Macharia',
      email: 'ian@gmail.com',
      parcelsSent: 20,
      parcelsReceived: 32,
      totalAmount: 20030,
    },
  ];

  public get getCustomers() {
    return this.customers;
  }

  // search customer
  public searchParcel(customerName: string) {
    return this.customers.filter(
      (customer) => customer.username == customerName
    );
  }
}
