import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faBox,
  faUsers,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // icons
  fadashboard = faDashboard;
  faparcel = faBox;
  fauser = faUsers;
  fatrack = faTruck;

  constructor() {}

  ngOnInit(): void {}
}
