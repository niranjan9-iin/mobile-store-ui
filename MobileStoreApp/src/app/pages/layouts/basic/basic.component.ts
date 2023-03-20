import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  APP_NAME= APP_NAME;
  constructor() { }

  ngOnInit() {
  }

}
