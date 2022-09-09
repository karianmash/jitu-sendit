import { Component, OnInit } from '@angular/core';
import {
  faCheck,
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

  noParcels: number;
  parcels: Parcel[] = [];

  constructor(private parcelsService: ParcelsService) {}

  ngOnInit(): void {
    // get parcels
    this.parcels = this.parcelsService.getParcels;

    if (this.parcels.length > 0) {
      this.noParcels = this.parcels.length;
    }
  }
}
