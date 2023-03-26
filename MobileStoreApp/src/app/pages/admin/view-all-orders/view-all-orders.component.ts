import { Component, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrls: ['./view-all-orders.component.scss']
})
export class ViewAllOrdersComponent implements OnInit {
orderInfo
  constructor(public service:MobileStoreService) { }

  ngOnInit() {
    this.service.getAllOrders().subscribe(res=>{
this.orderInfo=res;
    })
  }

}
