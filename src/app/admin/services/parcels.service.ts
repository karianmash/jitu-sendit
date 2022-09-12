import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, refCount } from 'rxjs';
import { Parcel } from 'src/app/interface/parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  baseUrl: string = 'http://localhost:3000';
  // parcels$: Observable<Parcel[]>;

  constructor(private http: HttpClient) {}

  // Get parcels
  public get getParcels(): Observable<Parcel[]> {
    // return this.parcels;
    return this.http.get<Parcel[]>(`${this.baseUrl}/parcels`);
  }

  // Get total parcels' price
  // public getTotalParcelPrice() {
  // let priceAmount = 0;

  // this.parcels.forEach((parcel) => {
  //   priceAmount += parseInt(parcel.price);
  // });
  // return priceAmount;
  // }

  // Get parcels sent by me
  // public getSentParcels(sender: string) {
  // return this.parcels.filter((parcel) => parcel.sender == sender);
  // }

  // Get parcels sent to me
  // public getReceivedParcels(receiver: string) {
  // return this.parcels.filter((parcel) => parcel.receiver == receiver);
  // }

  // Get parcel's details
  // public getSingleParcel(trackId: string) {
  // return this.parcels.filter((parcel) => parcel.trackId == trackId);
  // }

  // Get parcels for a specific user
  // public getSingleParcelUsingEmail(email: string) {
  // return this.parcels.filter((parcel) => parcel.sender == email);
  // }

  // Register parcel
  // public registerParcel(parcel: Parcel): void {
  // this.parcels.push(parcel);
  // }

  // Update parcel
  // public updateParcel(updatedParcel: Parcel) {
  // this.parcels = this.parcels.map((parcel) => {
  //   if (parcel.trackId === updatedParcel.trackId) {
  //     parcel.item = updatedParcel.item;
  //     parcel.createdAt = updatedParcel.createdAt;
  //     parcel.sender = updatedParcel.sender;
  //     parcel.receiver = updatedParcel.receiver;
  //     parcel.status = updatedParcel.status;
  //     parcel.shipper = updatedParcel.shipper;
  //     parcel.price = updatedParcel.price;
  //     parcel.location = updatedParcel.location;
  //   }
  //   return parcel;
  // });
  // }

  // search parcel
  // public searchParcel(searchItem: string): Parcel[] {
  // return this.parcels.filter((parcel) => parcel.trackId == searchItem);
  // }

  // filter parcel
  // public filterParcels(parcelStatus: string): Parcel[] {
  // if (parcelStatus === 'All') {
  //   return this.parcels;
  // } else {
  //   return this.parcels.filter((parcel) => parcel.status == parcelStatus);
  // }
  // }

  // delete parcel
  // public deleteParcel(parcelId: string) {
  // find parcel's index
  //   let parcelIndex = this.parcels.findIndex(
  //     (parcel) => parcel.trackId == parcelId
  //   );

  //   return this.parcels.splice(parcelIndex, 1);
  // }
}
