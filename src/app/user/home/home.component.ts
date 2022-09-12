import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import { Parcel } from 'src/app/interface/parcel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Form object
  reactiveUserForm: FormGroup;
  parcel: Parcel[];

  constructor(private parcelsService: ParcelsService) {}

  ngOnInit(): void {
    let userEmail = JSON.parse(localStorage.getItem('userInfo')).email;

    this.parcel = this.parcelsService.getSingleParcelUsingEmail(userEmail);

    this.reactiveUserForm = new FormGroup({
      item: new FormControl(`${this.parcel[0].item}`, Validators.required),
      date: new FormControl(`${this.parcel[0].createdAt}`, [
        Validators.required,
      ]),
      sender: new FormControl(`${this.parcel[0].sender}`, Validators.required),
      receiver: new FormControl(
        `${this.parcel[0].receiver}`,
        Validators.required
      ),
      status: new FormControl(`${this.parcel[0].status}`, Validators.required),
      shipper: new FormControl(
        `${this.parcel[0].shipper}`,
        Validators.required
      ),
      price: new FormControl(`${this.parcel[0].price}`, Validators.required),
      location: new FormControl(
        `${this.parcel[0].location}`,
        Validators.required
      ),
    });
  }
}
