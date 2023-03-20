import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {
  APP_NAME= APP_NAME;
  constructor() { }

  ngOnInit() {
  }

}
