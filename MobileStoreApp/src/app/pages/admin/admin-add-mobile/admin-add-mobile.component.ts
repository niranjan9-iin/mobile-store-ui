import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-admin-add-mobile',
  templateUrl: './admin-add-mobile.component.html',
  styleUrls: ['./admin-add-mobile.component.scss']
})
export class AdminAddMobileComponent implements OnInit {
  constructor(public service: MobileStoreService) { }
  categoryObjectList: any;
  RamValue=[2,4,8,16];
  ngOnInit() {
    this.getAllCategories();
  }

  onAddMobile(ngForm: NgForm) {
    this.service.addMobile(ngForm.value).subscribe(res => {
      alert('Mobile successfully added!');
    }, error => {
      alert('Error occured while adding mobile');
    })
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe(res => {
      this.categoryObjectList = res;
    })
  }
}
