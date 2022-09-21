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
  getParcel,
  numberOfParcels,
} from 'src/app/ngrx-store/selectors/parcel.selectors';
import { ParcelState } from 'src/app/ngrx-store/models/parcel.model';
import * as Actions from '../../ngrx-store/actions/parcel.actions';
import { Parcel } from 'src/app/interface/parcel';

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

  constructor(private router: Router, private store: Store<ParcelState>) {}

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
