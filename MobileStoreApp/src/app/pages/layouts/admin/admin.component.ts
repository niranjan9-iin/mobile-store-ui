import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  APP_NAME = APP_NAME;
  constructor() { }

  ngOnInit() {
  }

}
