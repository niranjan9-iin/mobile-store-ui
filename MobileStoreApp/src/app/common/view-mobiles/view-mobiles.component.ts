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
  mobilesList
  constructor(private service: MobileStoreService) { }

  ngOnInit() {
    this.viewMobiles();
  }

  public viewMobiles() {
    this.service.retrieveMobiles().subscribe(res => {
      this.mobilesList=res;
    })
  }
}
