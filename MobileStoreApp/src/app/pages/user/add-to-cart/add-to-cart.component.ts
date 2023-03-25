import { Component, Input, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input()
  role
  @Input()
  mobileId
  mbobj
  disableBtn = false;
  mobilesInCart: any;
  constructor(public service: MobileStoreService) { }

  ngOnInit() {
    this.checkIfMobileAlreadyInCart();
  }
  
  addMobileToCart(mobileId){
    this.service.addToCart(mobileId).subscribe(res=>{
      this.disableBtn = true;
      alert('Mobile successfully added to cart');
    },error=>{
      alert('Error occured while adding to cart');
    })
  }

  checkIfMobileAlreadyInCart() {
    this.service.getCartItems().subscribe((res:any)=>{
      if (res.mobilesInCart) {
        console.log(this.mobileId);
        
         this.mbobj = res.mobilesInCart.filter(ele => ele.mobileId === this.mobileId);
        if (this.mbobj.length > 0) {
          this.disableBtn = true;
          console.log('here');
          
        }
      }
    })
  }
}
