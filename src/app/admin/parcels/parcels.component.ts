import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faCheck,
  faLink,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Parcel } from 'src/app/interface/parcel';
import { getParcel, ParcelState } from 'src/app/Redux/reducers/ParcelsReducers';
import { ParcelsService } from '../services/parcels.service';
import * as Actions from '../../Redux/actions/ParcelsActions';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  // icons
  faedit = faPenToSquare;
  facheck = faCheck;
  fatrash = faTrash;
  falink = faLink;

  constructor( private router: Router, private store: Store<ParcelState>) {}

  numberOfParcels: number;
  parcels$ = this.store.select(getParcel);
  searchItem: string = '';

  // Form object
  reactiveFilterForm: FormGroup;

  ngOnInit(): void {
    // reactive filter form
    this.reactiveFilterForm = new FormGroup({
      parcelStatus: new FormControl(null, Validators.required),
    });

    // get parcels
    // this.parcels = this.parcelsService.getParcels;
    // if (this.parcels.length > 0) {
    //   this.numberOfParcels = this.parcels.length;
    // }
    this.loadParcels();
  }

  loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }

  // parcel details
  showDetails(parcelId: string) {
    this.router.navigate(['/admin/parcel-details/' + parcelId]);
  }

  // search parcel
  searchParcel() {
    // this.parcels = this.parcelsService.searchParcel(this.searchItem);
  }

  // Filter parcel
  // filterParcels(): void {
  //   this.parcels = this.parcelsService.filterParcels(
  //     this.reactiveFilterForm.value.parcelStatus
  //   );
  // }

  // delete parcel
  // deleteParcel(parcelId: string) {
  //   // this.parcels = this.parcelsService.deleteParcel(parcelId);
  //   console.log(this.parcelsService.deleteParcel(parcelId));
  // }
}
