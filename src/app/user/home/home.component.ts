import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Form object
  reactiveUserForm: FormGroup;
  parcel: Parcel[];

  constructor(private parcelsService: ParcelsService) {}

  ngOnInit(): void {
    let userEmail = JSON.parse(localStorage.getItem('userInfo')).email;

    // this.parcel = this.parcelsService.getSingleParcelUsingEmail(userEmail);

    this.reactiveUserForm = new FormGroup({
      item: new FormControl(`${this.parcel[0].item_name}`),
      weight: new FormControl(`${this.parcel[0].weight}`),
      sender: new FormControl(`${this.parcel[0].sender}`),
      receiver: new FormControl(`${this.parcel[0].receiver}`),
      status: new FormControl(`${this.parcel[0].status}`),
      shipper: new FormControl(`${this.parcel[0].shipper}`),
      price: new FormControl(`${this.parcel[0].price}`),
      origin_location: new FormControl(`${this.parcel[0].origin_location}`),
      pickup_location: new FormControl(`${this.parcel[0].pick_up_location}`),
    });
  }
}
