import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.scss']
})
export class EditMyProfileComponent implements OnInit {
  customerId: string;
  roleList=['Admin','User'];
  constructor(public service:MobileStoreService) { }
  customerInfo;

  ngOnInit() {
    this.service.getCustomerById(sessionStorage.getItem('USER_ID')).subscribe((res:any)=>{
      this.customerInfo=res;
      this.customerId=res.userId;
    })
  }

  updateCustomerInfo(ngForm: NgForm){
    const regex = new RegExp('[0-9]{10}');
    const custId=Number.parseInt(this.customerId);
    ngForm.value.userId=custId;
    console.log(typeof(custId));
    ngForm.value.password = null;
    if(regex.test(ngForm.value.mobileNumber)){
      this.service.editUser(ngForm.value).subscribe(res=>{
        alert('User updated successfully')
      },error=>{
        alert('Error occured while updating user');
      })
    }else{
      alert('Please check mobile number');
    }
    
  }

}
