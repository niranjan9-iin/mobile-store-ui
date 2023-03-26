import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-edit-customer-info',
  templateUrl: './edit-customer-info.component.html',
  styleUrls: ['./edit-customer-info.component.scss']
})
export class EditCustomerInfoComponent implements OnInit {
  customerId;
  customerInfo;
  roleList=['Admin','User'];
  constructor(private route: ActivatedRoute, private service: MobileStoreService) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.service.getCustomerById(this.customerId).subscribe(res=>{
      this.customerInfo=res;
    })
  }

  updateCustomerInfo(ngForm: NgForm){
    ngForm.value.userId=this.customerId;
    this.service.editUser(ngForm.value).subscribe(res=>{
      alert('User updated successfully')
    },error=>{
      alert('Error occured while updating user');
    })
  }

}
