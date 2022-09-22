import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// icons
import {
  faCheck,
  faLink,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

// parcel store selectors
import {
  filterParcel,
  getParcel,
  getSingleParcel,
  numberOfParcels,
  searchParcel,
} from 'src/app/ngrx-store/selectors/parcel.selectors';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import * as Actions from '../../ngrx-store/actions/parcel.actions';
import { Parcel } from 'src/app/interface/parcel';
import { ParcelsService } from '../services/parcels.service';

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

  constructor(
    private router: Router,
    private store: Store<ParcelState>,
    private parcelsService: ParcelsService
  ) {
    // get parcels
    this.loadParcels();
  }

  numberOfParcels$ = this.store.select(numberOfParcels);
  parcels: Parcel[];
  searchItem: string = '';

  // Form object
  reactiveFilterForm: FormGroup;

  ngOnInit(): void {
    // reactive filter form
    this.reactiveFilterForm = new FormGroup({
      parcelStatus: new FormControl(null, Validators.required),
    });
    // get parcels
    this.loadParcels();

    this.store
      .select(getParcel)
      .subscribe((parcels) => (this.parcels = parcels));
  }

  loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }

  // parcel details
  showDetails(parcelId: string) {
    this.store.dispatch(Actions.SetParcelId({ id: parcelId }));

    this.router.navigate(['/admin/parcel-details/' + parcelId]);
  }

  editParcel(parcelId: string) {
    this.store.dispatch(Actions.SetParcelId({ id: parcelId }));

    this.router.navigate(['/admin/update-parcel/' + parcelId]);
  }

  // search parcel
  searchParcel() {
    this.store.select(searchParcel).subscribe((parcels) => {
      this.parcels = parcels;
    });
  }

  // Filter parcel
  filterParcels(): void {
    this.store.dispatch(
      Actions.SetParcelStatus({
        status: this.reactiveFilterForm.value.parcelStatus,
      })
    );

    this.store.select(filterParcel).subscribe((parcels) => {
      this.parcels = parcels;
    });
  }

  // delete parcel
  deleteParcel(parcel_id: string) {
    this.parcelsService.deleteParcel(parcel_id).subscribe((data) => {
      this.loadParcels();
    });
  }
}
