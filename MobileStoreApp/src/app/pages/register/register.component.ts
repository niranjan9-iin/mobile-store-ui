import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage
  constructor(public service: MobileStoreService) { }

  ngOnInit() {
  }
  onSubmit(ngForm: NgForm) {
    const regex = new RegExp('[0-9]{10}');
    if (ngForm.value.password === ngForm.value.cpassword) {
      if (regex.test(ngForm.value.mobileNumber)) {
        this.service.addUser(ngForm.value).subscribe(res => {
          alert('Successfully registered!');
        }, error => {
          this.errorMessage = error.error.message
          alert(this.errorMessage);
        })
      } else {
        alert('Enter only 10 digits in Mobile Number');
      }
    } else {
      alert('Passwords didn\'t match');
    }
  }
}
