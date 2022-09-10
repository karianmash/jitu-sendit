import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css'],
})
export class ParcelDetailsComponent implements OnInit {
  // Form object
  reactiveParcelForm: FormGroup;

  parcel: Parcel;

  parcelId: string;

  constructor(private _activatedroute: ActivatedRoute) {}

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

    this._activatedroute.paramMap.subscribe((params) => {
      this.parcelId = params.get('parcelId');
    });

    console.log(this.parcelId);
  }

  onSubmit() {}
}
