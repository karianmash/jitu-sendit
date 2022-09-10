import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Parcel } from 'src/app/interface/parcel';
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

  constructor(private parcelsService: ParcelsService, private router: Router) {}

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
      if (parcel[inputValue] === null) {
        parcel[inputValue] = 'invalid';
      }
    }

    this.parcel = parcel;

    if (this.reactiveParcelForm.valid === true) {
      console.log(this.parcel);

      this.registerParcel(this.parcel);
    }
  }

  // Register parcel
  registerParcel(parcel: Parcel) {
    this.parcelsService.registerParcel(parcel);
    this.router.navigate(['/admin/parcels']);
  }
}
