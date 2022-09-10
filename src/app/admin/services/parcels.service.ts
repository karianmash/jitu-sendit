import { Injectable } from '@angular/core';
import { Parcel } from 'src/app/interface/parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  constructor() {}

  private parcels: Parcel[] = [
    {
      trackId: '562457806',
      shipper: 'Amazon Air',
      status: 'In Progress',
      createdAt: '2019-08-04',
      sender: 'Martin',
      receiver: 'Hezron',
      item: 'Nike shoes',
      location: 'Nyeri',
      price: '5,010',
    },
    {
      trackId: '562457896',
      shipper: 'UPS Courier',
      status: 'Canceled',
      createdAt: '2019-08-04',
      sender: 'Ann',
      receiver: 'Wangari',
      item: 'Nike shoes',
      location: 'Nyeri',
      price: '5,010',
    },
    {
      trackId: '923659456',
      shipper: 'Mash Movers',
      status: 'Completed',
      createdAt: '2019-08-04',
      sender: 'Christine',
      receiver: 'Nyakio',
      item: 'Dresses',
      location: 'Nyeri',
      price: '5,010',
    },
  ];

  // Get parcels
  public get getParcels() {
    return this.parcels;
  }

  // Get parcels
  public getSingleParcels(trackId: string) {
    return this.parcels.filter((parcel) => parcel.trackId == trackId);
  }

  // Register parcel
  public registerParcel(parcel: Parcel): void {
    this.parcels.push(parcel);
  }

  // Update parcel
  public updateParcel(updatedParcel: Parcel) {
    this.parcels = this.parcels.map((parcel) => {
      if (parcel.trackId === updatedParcel.trackId) {
        parcel.item = updatedParcel.item;
        parcel.createdAt = updatedParcel.createdAt;
        parcel.sender = updatedParcel.sender;
        parcel.receiver = updatedParcel.receiver;
        parcel.status = updatedParcel.status;
        parcel.shipper = updatedParcel.shipper;
        parcel.price = updatedParcel.price;
        parcel.location = updatedParcel.location;
      }
      return parcel;
    });
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

  // delete parcel
  public deleteParcel(parcelId: string) {
    // find parcel's index
    let parcelIndex = this.parcels.findIndex(
      (parcel) => parcel.trackId == parcelId
    );

    return this.parcels.splice(parcelIndex, 1);
  }
}
