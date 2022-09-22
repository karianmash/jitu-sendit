import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import { getParcel } from 'src/app/ngrx-store/selectors/parcel.selectors';

import * as Actions from '../../ngrx-store/actions/parcel.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Form object
  reactiveUserForm: FormGroup;

  userParcels: Parcel[];
  parcels: Parcel[];

  constructor(private store: Store<ParcelState>) {
    // this.loadParcels();
    // this.store.select(getParcel).subscribe((parcels) => {
    //   this.userParcels = parcels;
    // });
    // console.log(this.userParcels);
  }

  ngOnInit(): void {
    let user_id = JSON.parse(localStorage.getItem('userInfo')).user.user_id;

    this.loadParcels();

    this.store.select(getParcel).subscribe((parcels) => {
      this.userParcels = parcels.filter((parcel) => parcel.user_id === user_id);

      this.reactiveUserForm = new FormGroup({
        item_name: new FormControl(`${this.userParcels[0].item_name}`),
        weight: new FormControl(`${this.userParcels[0].weight}`),
        sender: new FormControl(`${this.userParcels[0].sender}`),
        receiver: new FormControl(`${this.userParcels[0].receiver}`),
        status: new FormControl(`${this.userParcels[0].status}`),
        shipper: new FormControl(`${this.userParcels[0].shipper}`),
        price: new FormControl(`${this.userParcels[0].price}`),
        origin_location: new FormControl(
          `${this.userParcels[0].origin_location}`
        ),
        pick_up_location: new FormControl(
          `${this.userParcels[0].pick_up_location}`
        ),
      });
    });
  }

  async loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }
}
