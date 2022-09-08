import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-create-parcel',
  templateUrl: './create-parcel.component.html',
  styleUrls: ['./create-parcel.component.css'],
})
export class CreateParcelComponent implements OnInit {
  faadd = faPlus;

  parcel: Parcel = {
    trackId: '48541693865169',
    shipper: 'Mash mover',
    status: 'In Progress',
    createdAt: '2022.01.03 20:06.256',
    price: '203',
  };

  constructor() {}

  ngOnInit(): void {}
}
