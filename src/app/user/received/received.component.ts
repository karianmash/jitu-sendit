import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import {
  receivedParcels,
  searchParcel,
  sentParcels,
} from 'src/app/ngrx-store/selectors/parcel.selectors';

import * as Actions from '../../ngrx-store/actions/parcel.actions';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css'],
})
export class ReceivedComponent implements OnInit {
  falink = faLink;

  numberOfParcels: number;
  parcels: Parcel[] = [];
  searchItem: string = '';

  // Form object
  reactiveFilterForm: FormGroup;

  constructor(
    private parcelsService: ParcelsService,
    private router: Router,
    private store: Store<ParcelState>
  ) {}

  ngOnInit(): void {
    let userEmail = JSON.parse(localStorage.getItem('userInfo')).user.email;

    this.store.dispatch(Actions.SetSenderEmail({ email: userEmail }));

    this.store.select(receivedParcels).subscribe((parcels) => {
      this.numberOfParcels = parcels.length;

      this.parcels = parcels;
    });
  }

  // search parcel
  searchParcel() {
    this.store.dispatch(Actions.SetParcelId({ id: this.searchItem }));

    this.store.select(searchParcel).subscribe((parcels) => {
      this.parcels = parcels;
    });
  }

  // parcel details
  showDetails(parcelId: string) {
    this.router.navigate(['/user/parcel-details/' + parcelId]);
  }
}
