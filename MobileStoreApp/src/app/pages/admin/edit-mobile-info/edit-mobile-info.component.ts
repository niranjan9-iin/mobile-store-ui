import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-edit-mobile-info',
  templateUrl: './edit-mobile-info.component.html',
  styleUrls: ['./edit-mobile-info.component.scss']
})
export class EditMobileInfoComponent implements OnInit {

  mobileId
  mobileObject
  categoryObjectList: Object;
  
  constructor(private route: ActivatedRoute, private service: MobileStoreService, private router: Router) { }
  ngOnInit(): void {
    this.getAllCategories();
    this.mobileId = this.route.snapshot.paramMap.get('id');
    this.getMobileById(this.mobileId);
  }
  getMobileById(id) {
    this.service.showMobileById(id).subscribe(res => {
      this.mobileObject = res;
    })
  }
  getAllCategories() {
    this.service.getAllCategories().subscribe(res => {
      this.categoryObjectList = res;
    })
  }
  updateMobileInfo(ngForm: NgForm) {
    ngForm.value.mobileId=this.mobileId;
    this.service.updateMobileInfo(ngForm.value).subscribe(res=>{
      if(confirm('Changes saved successfully, go back to View Mobiles?'))
      {
        this.router.navigateByUrl('/admin')
      }
    })
  }
}
