import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css'],
})
export class DeliveriesComponent implements OnInit {
  fatrash = faTrash;

  noDeliveries: number;

  deliveries: User[] = [
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
    if (this.deliveries.length > 0) {
      this.noDeliveries = this.deliveries.length;
    }
  }
}
