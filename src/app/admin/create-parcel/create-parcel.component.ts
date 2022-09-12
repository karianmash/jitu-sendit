import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Parcel } from 'src/app/interface/parcel';
import { User } from 'src/app/interface/user';
import { ParcelsService } from '../services/parcels.service';

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

  constructor(
    private parcelsService: ParcelsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reactiveParcelForm = new FormGroup({
      item: new FormControl(null, Validators.required),
      date: new FormControl(null, [Validators.required]),
      sender: new FormControl(null, Validators.required),
      receiver: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      shipper: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
    });

    this.users = this.authService.getUsers();
  }

  // Handle form submission
  onSubmit(): void {
    let parcel = {
      trackId: Math.trunc(Math.random() * 10000000000).toString(),
      item: this.reactiveParcelForm.value.item,
      createdAt: this.reactiveParcelForm.value.date,
      sender: this.reactiveParcelForm.value.sender,
      receiver: this.reactiveParcelForm.value.receiver,
      status: this.reactiveParcelForm.value.status,
      shipper: this.reactiveParcelForm.value.shipper,
      price: this.reactiveParcelForm.value.price,
      location: this.reactiveParcelForm.value.location,
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

      this.registerParcel(this.parcel);
    }
  }

  // Register parcel
  registerParcel(parcel: Parcel) {
    // this.parcelsService.registerParcel(parcel);
    this.router.navigate(['/admin/parcels']);
  }
}
