import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styleUrls: ['./show-all-customers.component.scss']
})
export class ShowAllCustomersComponent implements OnInit {
  customerInfo;
  constructor(public service:MobileStoreService, public router: Router) { }

  ngOnInit() {
    this.service.getAllCustomers().subscribe(res=>{
      this.customerInfo = res;
    })
  }
  editUserInfo(item) {
    console.log(item);
    this.router.navigate(['admin/edit-customer-info', item.userId]);
  }

}
