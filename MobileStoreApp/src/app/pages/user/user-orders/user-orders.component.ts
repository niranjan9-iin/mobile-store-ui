import { Component, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  orderInfo
  constructor(public service: MobileStoreService) { }
  ngOnInit() {
    this.getOrder();
  }
  getOrder() {
    this.service.getOrdersByUserId(sessionStorage.getItem('USER_ID')).subscribe(res=>{
      this.orderInfo = res;
    })
  }
  cancelOrder(item){
    this.service.cancelOrder(item.orderId).subscribe(res=>{
      
    })
  }
}
