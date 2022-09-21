import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, refCount } from 'rxjs';
import { baseUrl } from 'src/app/common/api';
import { Parcel } from 'src/app/interface/parcel';

@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  constructor(private http: HttpClient) {}

  // Get parcels
  public get getParcels(): Observable<Parcel[]> {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return this.http.get<Parcel[]>(`${baseUrl}/parcels/get_parcels`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${userInfo.token}`
      ),
    });
  }

  // Create parcel
  public createParcel(parcel: Parcel): Observable<{ message: string }> {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return this.http.post<{ message: string }>(
      `${baseUrl}/parcels/create_parcel`,
      parcel,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${userInfo.token}`
        ),
      }
    );
  }

  // Get parcel's details
  public getSingleParcel(trackId: string): Observable<Parcel> {
    return this.http.get<Parcel>(`${baseUrl}/parcels/${trackId}`);
  }

  // Update parcel
  // public updateParcel(updatedParcel: Parcel): Observable<{ message: string }> {
  // this.parcels = this.parcels.map((parcel) => {
  //   if (parcel.trackId === updatedParcel.track_id) {
  //     parcel.item = updatedParcel.item_name;
  //     parcel.createdAt = updatedParcel.weight;
  //     parcel.sender = updatedParcel.sender;
  //     parcel.receiver = updatedParcel.receiver;
  //     parcel.status = updatedParcel.status;
  //     parcel.shipper = updatedParcel.shipper;
  //     parcel.price = updatedParcel.price;
  //     parcel.location = updatedParcel.location;
  //   }
  //   return parcel;
  // });

  //   return this.http.patch<{ message: string }>(
  //     `${this.baseUrl}/parcels`,
  //     updatedParcel
  //   );
  // }

  // Get parcels sent to me
  // public getReceivedParcels(receiver: string) {
  // return this.parcels.filter((parcel) => parcel.receiver == receiver);
  //   return this.http.get<Parcel[]>(`${this.baseUrl}/parcels`);
  // }

  // Get parcels sent by me
  // public getSentParcels(sender: string) {
  // return this.parcels.filter((parcel) => parcel.sender == sender);
  // }

  // Get parcels for a specific user
  // public getSingleParcelUsingEmail(email: string) {
  // return this.parcels.filter((parcel) => parcel.sender == email);
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
