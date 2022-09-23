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
  public updateParcel(updatedParcel: Parcel) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return this.http.patch<{ message: string }>(
      `${baseUrl}/parcels/update_parcel`,
      updatedParcel,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${userInfo.token}`
        ),
      }
    );
  }

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

  // delete parcel
  public deleteParcel(parcel_id: string) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return this.http.delete<{ message: string }>(
      `${baseUrl}/parcels/delete_parcel/${parcel_id}`,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${userInfo.token}`
        ),
      }
    );
  }
}
