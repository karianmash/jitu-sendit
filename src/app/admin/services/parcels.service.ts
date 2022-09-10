import { Injectable } from '@angular/core';
import { Parcel } from 'src/app/interface/parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  constructor() {}

  private parcels: Parcel[] = [
    {
      trackId: '1256498756',
      shipper: 'UPS Couriers',
      status: 'In Progress',
      createdAt: '2019.08.04',
      item: 'Jeans',
      location: 'Nyeri',
      price: '5,010',
    },
    {
      trackId: '5624578961',
      shipper: 'Amazon Air',
      status: 'Completed',
      createdAt: '2019.08.04',
      item: 'Nike shoes',
      location: 'Nyeri',
      price: '5,010',
    },
    {
      trackId: '923659456',
      shipper: 'Mash mover',
      status: 'In Progress',
      createdAt: '2019.08.04',
      item: 'Dresses',
      location: 'Nyeri',
      price: '5,010',
    },
    {
      trackId: '6542157830',
      shipper: 'UPS Couriers',
      status: 'Canceled',
      createdAt: '2019.08.04',
      item: 'Tesla model Y',
      location: 'Nyeri',
      price: '5,010',
    },
  ];

  // Get parcels
  public get getParcels() {
    return this.parcels;
  }

  // Register parcel
  public registerParcel(parcel: Parcel): void {
    this.parcels.push(parcel);
  }

  // search parcel
  public searchParcel(searchItem: string): Parcel[] {
    return this.parcels.filter((parcel) => parcel.trackId == searchItem);
  }

  // filter parcel
  public filterParcels(parcelStatus: string): Parcel[] {
    if (parcelStatus === 'All') {
      return this.parcels;
    } else {
      return this.parcels.filter((parcel) => parcel.status == parcelStatus);
    }
  }
}
