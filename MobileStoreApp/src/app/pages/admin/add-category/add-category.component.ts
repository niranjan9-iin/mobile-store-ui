import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(public service: MobileStoreService) { }

  ngOnInit() {
  }
  addCategory(ngForm: NgForm){
    this.service.addCategory(ngForm.value).subscribe(res=>{
      alert('Category successfully added');
    },error=>{
      alert('Error occured while adding categories');
    })
  }
}
