import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parcel } from 'src/app/interface/parcel';
import { ParcelsService } from '../services/parcels.service';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  // Form object
  reactiveParcelForm: FormGroup;

  parcels: Parcel[];
  parcel: Parcel;

  parcelId: string;

  constructor(
    private _activatedroute: ActivatedRoute,
    private parcelsService: ParcelsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    this.parcels = this.parcelsService.getSingleParcels(this.parcelId);

    console.log(this.parcels);

    this.reactiveParcelForm = new FormGroup({
      item: new FormControl(`${this.parcels[0].item}`, Validators.required),
      date: new FormControl(`${this.parcels[0].createdAt}`, [
        Validators.required,
      ]),
      sender: new FormControl(`${this.parcels[0].sender}`, Validators.required),
      receiver: new FormControl(
        `${this.parcels[0].receiver}`,
        Validators.required
      ),
      status: new FormControl(`${this.parcels[0].status}`, Validators.required),
      shipper: new FormControl(
        `${this.parcels[0].shipper}`,
        Validators.required
      ),
      price: new FormControl(`${this.parcels[0].price}`, Validators.required),
      location: new FormControl(
        `${this.parcels[0].location}`,
        Validators.required
      ),
    });
  }

  // Handle form submission
  onSubmit(): void {
    let parcel = {
      trackId: this.parcelId,
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

      this.updateParcel(this.parcel);
    }
  }

  // Register parcel
  updateParcel(parcel: Parcel) {
    this.parcelsService.updateParcel(parcel);
    this.router.navigate(['/admin/parcels']);
  }
}
