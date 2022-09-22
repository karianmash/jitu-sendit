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
import { ParcelsService } from '../services/parcels.service';

@Component({
  selector: 'app-update-parcel',
  templateUrl: './update-parcel.component.html',
  styleUrls: ['./update-parcel.component.css'],
})
export class UpdateParcelComponent implements OnInit {
  // Form object
  reactiveParcelForm: FormGroup;

  parcels: Parcel;
  parcel: Parcel;

  parcelId: string;

  users: User[];

  counties: string[] = [
    'baringo',
    'bomet',
    'bungoma',
    'busia',
    'elgeyo marakwet',
    'embu',
    'garissa',
    'homa bay',
    'isiolo',
    'kajiado',
    'kakamega',
    'kericho',
    'kiambu',
    'kilifi',
    'kirinyaga',
    'kisii',
    'kisumu',
    'kitui',
    'kwale',
    'laikipia',
    'lamu',
    'machakos',
    'makueni',
    'mandera',
    'meru',
    'migori',
    'marsabit',
    'mombasa',
    'muranga',
    'nairobi',
    'nakuru',
    'nandi',
    'narok',
    'nyamira',
    'nyandarua',
    'nyeri',
    'samburu',
    'siaya',
    'taita taveta',
    'tana river',
    'tharaka nithi',
    'trans nzoia',
    'turkana',
    'uasin gishu',
    'vihiga',
    'wajir',
    'pokot',
  ];

  constructor(
    private _activatedroute: ActivatedRoute,
    private parcelsService: ParcelsService,
    private store: Store<ParcelState>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    this.store.dispatch(Actions.SetParcelId({ id: this.parcelId }));

    this.store.select(getSingleParcel).subscribe((parcel) => {
      this.parcels = parcel;
    });

    this.authService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.reactiveParcelForm = new FormGroup({
      item_name: new FormControl(
        `${this.parcels.item_name}`,
        Validators.required
      ),
      weight: new FormControl(`${this.parcels.weight}`, [Validators.required]),
      sender: new FormControl(`${this.parcels.sender}`, Validators.required),
      receiver: new FormControl(
        `${this.parcels.receiver}`,
        Validators.required
      ),
      status: new FormControl(`${this.parcels.status}`, Validators.required),
      shipper: new FormControl(`${this.parcels.shipper}`, Validators.required),
      price: new FormControl(`${this.parcels.price}`, Validators.required),
      origin_location: new FormControl(
        `${this.parcels.origin_location}`,
        Validators.required
      ),
      pick_up_location: new FormControl(
        `${this.parcels.pick_up_location}`,
        Validators.required
      ),
    });
  }

  // Handle form submission
  onSubmit(): void {
    let parcel = {
      parcel_id: this.parcels.parcel_id,
      track_id: this.parcels.track_id,
      item_name: this.reactiveParcelForm.value.item_name,
      weight: this.reactiveParcelForm.value.weight.toString(),
      sender: this.reactiveParcelForm.value.sender,
      receiver: this.reactiveParcelForm.value.receiver,
      status: this.reactiveParcelForm.value.status,
      shipper: this.reactiveParcelForm.value.shipper,
      price: this.reactiveParcelForm.value.price,
      origin_location: this.reactiveParcelForm.value.origin_location,
      pick_up_location: this.reactiveParcelForm.value.pick_up_location,
      user_id: this.parcels.user_id,
    };

    for (let inputValue in parcel) {
      if (parcel[inputValue] === null || parcel[inputValue] == '') {
        parcel[inputValue] = 'invalid';
      }
    }

    this.parcel = parcel;

    if (this.reactiveParcelForm.valid === true) {
      if (this.parcel.sender === this.parcel.receiver) {
        return alert("Sender and receiver can't be the same");
      }

      if (isNaN(Number(this.parcel.price)) === true) {
        return alert('Price cannot be of type text!');
      }

      // Update parcel
      this.parcelsService.updateParcel(this.parcel).subscribe((data) => {
        this.router.navigate(['/admin/parcels']);
      });
    }
  }
}
