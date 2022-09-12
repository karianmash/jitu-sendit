import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css'],
})
export class SentComponent implements OnInit {
  falink = faLink;

  numberOfParcels: number;
  parcels: Parcel[] = [];
  searchItem: string = '';

  // Form object
  reactiveFilterForm: FormGroup;

  constructor(private parcelsService: ParcelsService, private router: Router) {}

  ngOnInit(): void {
    let userEmail = JSON.parse(localStorage.getItem('userInfo')).email;

    // get parcels
    // this.parcels = this.parcelsService.getSentParcels(userEmail);

    if (this.parcels.length > 0) {
      this.numberOfParcels = this.parcels.length;
    }
  }

  // search parcel
  searchParcel() {
    // this.parcels = this.parcelsService.searchParcel(this.searchItem);
  }

  // parcel details
  showDetails(parcelId: string) {
    this.router.navigate(['/user/parcel-details/' + parcelId]);
  }
}
