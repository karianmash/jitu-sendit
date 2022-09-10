import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faCheck,
  faLink,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
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

  constructor(private parcelsService: ParcelsService, private router: Router) {}

  numberOfParcels: number;
  parcels: Parcel[] = [];
  searchItem: string = '';

  // Form object
  reactiveFilterForm: FormGroup;

  ngOnInit(): void {
    // reactive filter form
    this.reactiveFilterForm = new FormGroup({
      parcelStatus: new FormControl(null, Validators.required),
    });

    // get parcels
    this.parcels = this.parcelsService.getParcels;
    if (this.parcels.length > 0) {
      this.numberOfParcels = this.parcels.length;
    }
  }

  // parcel details
  showDetails(i: string) {
    this.router.navigate(['/admin/parcel-details/' + i]);
  }

  // search parcel
  searchParcel() {
    this.parcels = this.parcelsService.searchParcel(this.searchItem);
  }

  // Filter parcel
  filterParcels(): void {
    this.parcels = this.parcelsService.filterParcels(
      this.reactiveFilterForm.value.parcelStatus
    );
  }
}
