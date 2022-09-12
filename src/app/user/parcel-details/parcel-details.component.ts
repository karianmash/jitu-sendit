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
}
