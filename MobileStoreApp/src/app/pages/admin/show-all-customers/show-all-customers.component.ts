import { Component, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styleUrls: ['./show-all-customers.component.scss']
})
export class ShowAllCustomersComponent implements OnInit {

  constructor(public service:MobileStoreService) { }

  ngOnInit() {
    this.service.getAllCustomers().subscribe(res=>{
      
    })
  }

}
