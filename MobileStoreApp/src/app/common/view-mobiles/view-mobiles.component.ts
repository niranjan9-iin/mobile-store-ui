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
    let token=sessionStorage.getItem('mobile-auth-token');
    this.viewMobiles(token);
  }

  public viewMobiles(token) {
    this.service.retrieveMobiles(token).subscribe(res => {
      this.mobilesList=res;
    })
  }
}
