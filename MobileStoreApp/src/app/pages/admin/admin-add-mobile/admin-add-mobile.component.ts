import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-add-mobile',
  templateUrl: './admin-add-mobile.component.html',
  styleUrls: ['./admin-add-mobile.component.scss']
})
export class AdminAddMobileComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm.value);
  }
}
