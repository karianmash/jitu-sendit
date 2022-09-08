import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faPaperPlane,
  faTrash,
  faBox,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // icons
  fadashboard = faDashboard;
  fapaperplane = faPaperPlane;
  fabox = faBox;
  fatrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
