import { Injectable } from '@angular/core';
import { Parcel } from 'src/app/interface/parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  constructor() {}

  private parcels: Parcel[] = [
    {
      trackId: '3054219382',
      shipper: 'UPS Couriers',
      status: 'Completed',
      createdAt: '2019.08.04 20:06.256',
      item: 'Nike shoes',
      location: 'Nyeri',
      price: '5,010',
    },
  ];

  // Get parcels
  public get getParcels() {
    return this.parcels;
  }

  // Register parcel
  public registerParcel(parcel: Parcel) {
    this.parcels.push(parcel);
  }
}
