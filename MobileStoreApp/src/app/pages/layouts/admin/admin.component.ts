import { Component, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  APP_NAME = APP_NAME;
  constructor(public service: MobileStoreService) { }

  ngOnInit() {
  }
  onLogout() {
    if (confirm('Are you sure want to Logout?')) {
      this.service.onLogout();
    }
  }
}
