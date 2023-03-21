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
  constructor(public service:MobileStoreService) { }

  ngOnInit() {
  }
  onSubmit(ngForm: NgForm) {
    if(ngForm.value.password===ngForm.value.cpassword)
    {
      this.service.addUser(ngForm.value).subscribe(res=>{
       alert('Successfully registered!');
      },error=>{
        this.errorMessage = error.error.message
        alert(this.errorMessage);
      })
    }else{
      alert('Passwords didn\'t match');
    }
  }
}
