import { Component, Input, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.scss']
})
export class ViewMobilesComponent implements OnInit {
  @Input()
  role: string
  mobilesList = [{
    "battety": 0,
    "category": {
      "categoryId": 0,
      "categoryName": "string"
    },
    "comeraPixcel": 0,
    "companyName": "string",
    "mfDate": "string",
    "mobileCost": 0,
    "mobileId": 0,
    "mobileName": "string",
    "mobileRAM": 0,
    "modelNumber": "string"
  }]
  constructor(private service: MobileStoreService) { }

  ngOnInit() {
    //this.viewMobiles();
  }

  public viewMobiles() {
    this.service.retrieveMobiles().subscribe(res => {
      console.log(res);

    })
  }
}
