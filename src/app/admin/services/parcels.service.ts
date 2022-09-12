import { Injectable } from '@angular/core';
import { refCount } from 'rxjs';
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
      sender: 'ianmachariak17@gmail.com',
      receiver: 'christine@gmail.com',
      item: 'Nike shoes',
      location: 'Nyeri',
      price: '5010',
    },
    {
      trackId: '562457896',
      shipper: 'UPS Courier',
      status: 'Canceled',
      createdAt: '2019-08-04',
      sender: 'ianmachariak17@gmail.com',
      receiver: 'ann@gmail.com',
      item: 'Nike shoes',
      location: 'Nyeri',
      price: '5010',
    },
    {
      trackId: '923659456',
      shipper: 'Mash Movers',
      status: 'Completed',
      createdAt: '2019-08-04',
      sender: 'christine@gmail.com',
      receiver: 'ianmachariak17@gmail.com',
      item: 'Dresses',
      location: 'Nyeri',
      price: '5010',
    },
  ];

  // Get parcels
  public get getParcels() {
    return this.parcels;
  }

  // Get total parcels' price
  public getTotalParcelPrice() {
    let priceAmount = 0;

    this.parcels.forEach((parcel) => {
      priceAmount += parseInt(parcel.price);
    });
    return priceAmount;
  }

  // Get parcels sent by me
  public getSentParcels(sender: string) {
    return this.parcels.filter((parcel) => parcel.sender == sender);
  }

  // Get parcels sent to me
  public getReceivedParcels(receiver: string) {
    return this.parcels.filter((parcel) => parcel.receiver == receiver);
  }

  // Get parcel's details
  public getSingleParcel(trackId: string) {
    return this.parcels.filter((parcel) => parcel.trackId == trackId);
  }

  // Get parcels for a specific user
  public getSingleParcelUsingEmail(email: string) {
    return this.parcels.filter((parcel) => parcel.sender == email);
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
