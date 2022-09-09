import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserParcel } from 'src/app/interface/user';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  fatrash = faTrash;

  noUsers: number;

  users: UserParcel[] = [
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

  constructor() {}

  ngOnInit(): void {
    if (this.users.length > 0) {
      this.noUsers = this.users.length;
    }
  }
}
