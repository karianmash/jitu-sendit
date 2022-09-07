import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faDollar,
  faLineChart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fatrack = faTruck;
  fachart = faLineChart;
  facurrency = faDollar;
  facustomers = faCartShopping;

  constructor() {}

  ngOnInit(): void {}
}
