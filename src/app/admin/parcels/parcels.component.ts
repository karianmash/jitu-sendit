import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
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

  noParcels: number;
  parcels: Parcel[] = [];

  ngOnInit(): void {
    // get parcels
    this.parcels = this.parcelsService.getParcels;

    if (this.parcels.length > 0) {
      this.noParcels = this.parcels.length;
    }
  }

  showDetails(i: string) {
    // console.log(i);
    this.router.navigate(['/admin/parcel-details/' + i]);
  }
}
