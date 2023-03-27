import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.scss']
})
export class ViewMobilesComponent implements OnInit {
  @Input()
  role: string
  mobilesList
  mobilesInCart: any;
  type;
  value;
  constructor(private service: MobileStoreService, private router:Router) { }
  disable=false;
  ngOnInit() {
    this.viewMobiles();
  }
  
  public viewMobiles() {
    this.service.retrieveMobiles().subscribe(res => {
      this.mobilesList=res;
    })
  }
  editMobileInfo(item) {
    console.log(item);
    this.router.navigate(['admin/edit-mobile', item.mobileId]);
  }
  searchByType(){
    console.log(this.type,this.value);
    this.service.searchMobilesByType(this.value,this.type).subscribe(res=>{
console.log(res);
this.mobilesList=res;
    },error=>{
      console.log(error); 
    })
    
  }
}
