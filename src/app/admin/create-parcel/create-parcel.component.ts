import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Parcel } from 'src/app/interface/parcel';
import { User } from 'src/app/interface/user';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import { ParcelsService } from '../services/parcels.service';
import * as Actions from '../../ngrx-store/actions/parcel.actions';

@Component({
  selector: 'app-create-parcel',
  templateUrl: './create-parcel.component.html',
  styleUrls: ['./create-parcel.component.css'],
})
export class CreateParcelComponent implements OnInit {
  // Icons
  faadd = faPlus;

  // Form object
  reactiveParcelForm: FormGroup;

  // Parcels
  parcel: Parcel;
  // users
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
    private router: Router,
    private authService: AuthService,
    private store: Store<ParcelState>
  ) {}

  ngOnInit(): void {
    this.reactiveParcelForm = new FormGroup({
      item: new FormControl(null, Validators.required),
      weight: new FormControl(null, [Validators.required]),
      sender: new FormControl(null, Validators.required),
      receiver: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      shipper: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      origin_location: new FormControl(null, Validators.required),
      pick_up_location: new FormControl(null, Validators.required),
    });

    this.authService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  // Handle form submission
  onSubmit(): void {
    let user: User = this.users.find(
      (user) => user.email === this.reactiveParcelForm.value.receiver
    );

    let parcel = {
      item_name: this.reactiveParcelForm.value.item,
      weight: this.reactiveParcelForm.value.weight.toString(),
      sender: this.reactiveParcelForm.value.sender,
      receiver: this.reactiveParcelForm.value.receiver,
      status: this.reactiveParcelForm.value.status,
      shipper: this.reactiveParcelForm.value.shipper,
      price: this.reactiveParcelForm.value.price,
      origin_location: this.reactiveParcelForm.value.origin_location,
      pick_up_location: this.reactiveParcelForm.value.pick_up_location,
      user_id: user.user_id,
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

      this.createParcel(this.parcel);
    }
  }

  // Register parcel
  createParcel(parcel: Parcel) {
    // create parcel
    this.store.dispatch(Actions.CreateParcel({ newParcel: parcel }));
    this.router.navigate(['/admin/parcels']);
  }
}
