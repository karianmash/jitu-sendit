import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  parcel: Parcel[];

  parcelId: string;

  constructor(
    private _activatedroute: ActivatedRoute,
    private parcelsService: ParcelsService
  ) {}

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    this.parcel = this.parcelsService.getSingleParcels(this.parcelId);

    console.log(this.parcel);

    this.reactiveParcelForm = new FormGroup({
      item: new FormControl(`${this.parcel[0].item}`, Validators.required),
      date: new FormControl(`${this.parcel[0].createdAt}`, [
        Validators.required,
      ]),
      sender: new FormControl(`${this.parcel[0].sender}`, Validators.required),
      receiver: new FormControl(
        `${this.parcel[0].receiver}`,
        Validators.required
      ),
      status: new FormControl(`${this.parcel[0].status}`, Validators.required),
      shipper: new FormControl(
        `${this.parcel[0].shipper}`,
        Validators.required
      ),
      price: new FormControl(`${this.parcel[0].price}`, Validators.required),
      location: new FormControl(
        `${this.parcel[0].location}`,
        Validators.required
      ),
    });
  }

  onSubmit() {}
}
