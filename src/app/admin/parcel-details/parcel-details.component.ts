import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Parcel } from 'src/app/interface/parcel';
import { User } from 'src/app/interface/user';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import { getSingleParcel } from 'src/app/ngrx-store/selectors/parcel.selectors';
import * as Actions from '../../ngrx-store/actions/parcel.actions';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  // Form object
  reactiveParcelForm: FormGroup;

  parcels: Parcel;
  parcel: Parcel;

  parcelId: string;

  users: User[];

  constructor(
    private _activatedroute: ActivatedRoute,
    private store: Store<ParcelState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    this.store.dispatch(Actions.SetParcelId({ id: this.parcelId }));

    this.store.select(getSingleParcel).subscribe((parcel) => {
      this.parcels = parcel;
    });

    console.log(this.parcels);

    this.authService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.reactiveParcelForm = new FormGroup({
      item: new FormControl(`${this.parcels.item_name}`),
      weight: new FormControl(`${this.parcels.weight}`),
      sender: new FormControl(`${this.parcels.sender}`),
      receiver: new FormControl(`${this.parcels.receiver}`),
      status: new FormControl(`${this.parcels.status}`),
      shipper: new FormControl(`${this.parcels.shipper}`),
      price: new FormControl(`${this.parcels.price}`),
      origin_location: new FormControl(`${this.parcels.origin_location}`),
      pick_up_location: new FormControl(`${this.parcels.pick_up_location}`),
    });
  }
}
