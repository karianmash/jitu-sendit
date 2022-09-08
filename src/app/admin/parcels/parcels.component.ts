import { Component, OnInit } from '@angular/core';
import {
  faCheck,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  faedit = faPenToSquare;
  facheck = faCheck;
  fatrash = faTrash;

  noParcels: number;

  parcels: Parcel[] = [
    {
      trackId: '48541693865169',
      shipper: 'Mash mover',
      status: 'In Progress',
      createdAt: '2022.01.03 20:06.256',
      price: '203',
    },
    {
      trackId: '30542193823695',
      shipper: 'UPS',
      status: 'Completed',
      createdAt: '2019.08.04 20:06.256',
      price: '5,010',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '30542193823695',
      shipper: 'UPS',
      status: 'Completed',
      createdAt: '2019.08.04 20:06.256',
      price: '5,010',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '30542193823695',
      shipper: 'UPS',
      status: 'Completed',
      createdAt: '2019.08.04 20:06.256',
      price: '5,010',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '30542193823695',
      shipper: 'UPS',
      status: 'Completed',
      createdAt: '2019.08.04 20:06.256',
      price: '5,010',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
    {
      trackId: '01854103865127',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2005.09.12 20:06.256',
      price: '300',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.parcels.length > 0) {
      this.noParcels = this.parcels.length;
    }
  }
}
