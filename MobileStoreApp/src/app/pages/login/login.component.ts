import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public service: MobileStoreService, public router:Router) { }

  ngOnInit() {
  }
  onSubmit(ngform: NgForm) {
    this.service.login(ngform.value).subscribe((res:any) => {
      sessionStorage.setItem('mobile-auth-token',res.token);
      if(res.role==='[User]'){
        this.router.navigateByUrl('/user');
      }else if(res.role==='[Admin]') {
        this.router.navigateByUrl('/admin');
      }
    },error=>{
      alert(error.error.message);
    })
  }
}
