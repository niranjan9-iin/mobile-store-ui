import { Component, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {
  APP_NAME= APP_NAME;
  constructor(public service:MobileStoreService) { }

  ngOnInit() {
  }
  onLogout() {
    if (confirm('Are you sure want to Logout?')) {
      this.service.onLogout();
    }
  }
}
