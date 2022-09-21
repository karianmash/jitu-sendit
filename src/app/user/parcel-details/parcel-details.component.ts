import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  // Form object
  reactiveUserForm: FormGroup;
  parcel: Parcel[];

  parcelId: string;

  constructor(
    private parcelsService: ParcelsService,
    private _activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    // this.parcel = this.parcelsService.getSingleParcel(this.parcelId);

    this.reactiveUserForm = new FormGroup({
      item: new FormControl(`${this.parcel[0].item_name}`),
      weight: new FormControl(`${this.parcel[0].weight}`),
      sender: new FormControl(`${this.parcel[0].sender}`),
      receiver: new FormControl(`${this.parcel[0].receiver}`),
      status: new FormControl(`${this.parcel[0].status}`),
      shipper: new FormControl(`${this.parcel[0].shipper}`),
      price: new FormControl(`${this.parcel[0].price}`),
      origin_location: new FormControl(`${this.parcel[0].origin_location}`),
      pick_up_location: new FormControl(`${this.parcel[0].pick_up_location}`),
    });
  }
}
