import { Component, OnInit } from '@angular/core';
import { MobileStoreService } from 'src/app/service/mobile-store.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(public service:MobileStoreService) { }
  mobilesList
  totalAmount;
  ordersRequestBody;
  cartResponse;
  mobileIdsArray;
  cartId;
  ngOnInit() {
    this.getAllCartItems();
  }
  getAllCartItems() {
    this.service.getCartItems().subscribe((res:any)=>{
      this.cartResponse = res;
      this.cartId = res.cartId;
      if(res.mobilesInCart){
        this.mobilesList = res.mobilesInCart;
      }
      this.totalAmount = res.totalCost;
    })
  }

  placeOrder(){
    this.mobileIdsArray = this.mobilesList.map(res=>res.mobileId)
    this.ordersRequestBody ={
      cost:this.cartResponse.totalCost,
      customerId:sessionStorage.getItem('USER_ID'),
      mobilesId:this.mobileIdsArray,
      quantity:this.cartResponse.quantity,
      totalCost:this.cartResponse.totalCost
    }
    this.service.placeOrder(this.ordersRequestBody).subscribe(res=>{
      console.log(res);
      
    })

  }
  placeOrderById(){
    this.service.placeOrderByCartAndCustomer(sessionStorage.getItem('USER_ID'),this.cartId).subscribe(res=>{
      alert('Order placed successfully, Go to Orders Page');
      this.ngOnInit();
    },error=>{
      alert('Error occured while placing order');
    })
  }
}
