import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';
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
  reactiveUserForm: FormGroup;
  parcel: Parcel;

  parcelId: string;

  constructor(
    private parcelsService: ParcelsService,
    private _activatedroute: ActivatedRoute,
    private store: Store<ParcelState>
  ) {}

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    this.store.dispatch(Actions.SetParcelId({ id: this.parcelId }));

    this.store.select(getSingleParcel).subscribe((parcel) => {
      this.parcel = parcel;
    });

    this.reactiveUserForm = new FormGroup({
      item: new FormControl(`${this.parcel.item_name}`),
      weight: new FormControl(`${this.parcel.weight}`),
      sender: new FormControl(`${this.parcel.sender}`),
      receiver: new FormControl(`${this.parcel.receiver}`),
      status: new FormControl(`${this.parcel.status}`),
      shipper: new FormControl(`${this.parcel.shipper}`),
      price: new FormControl(`${this.parcel.price}`),
      origin_location: new FormControl(`${this.parcel.origin_location}`),
      pick_up_location: new FormControl(`${this.parcel.pick_up_location}`),
    });
  }
}
