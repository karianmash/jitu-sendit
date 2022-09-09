import { Injectable } from '@angular/core';
import { Parcel } from 'src/app/interface/parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  constructor() {}

  private parcels: Parcel[] = [
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

  public get getParcels() {
    return this.parcels;
  }
}
