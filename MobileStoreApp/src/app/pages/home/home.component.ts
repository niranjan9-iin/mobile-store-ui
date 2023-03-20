import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  APP_NAME = APP_NAME;
  constructor() { }

  ngOnInit() {
  }

}
