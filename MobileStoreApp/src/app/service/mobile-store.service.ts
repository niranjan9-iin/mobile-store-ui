import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { authToken, hostUrl } from 'src/constants';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MobileStoreService {
  constructor(public http: HttpClient, public router: Router) { }

  public addUser(request) {
    return this.http.post(hostUrl + 'authentication/register', request);
  }

  public login(request) {
    return this.http.post(hostUrl + 'authentication/login', request);
  }

  public retrieveMobiles() {
    return this.http.get(hostUrl + 'mobile/getAll', this.createAuthHeaders(this.getSessionToken()));
  }

  public addMobile(requestBody) {
    return this.http.post(hostUrl + 'mobile/add', requestBody, this.createAuthHeaders(this.getSessionToken()));
  }

  public addCategory(requestBody) {
    return this.http.post(hostUrl + 'admin/category/add', requestBody, this.createAuthHeaders(this.getSessionToken()));
  }

  public getAllCategories() {
    return this.http.get(hostUrl + 'admin/category/get/all', this.createAuthHeaders(this.getSessionToken()));
  }

  public showMobileById(id) {
    return this.http.get(hostUrl + 'mobile/get/' + id, this.createAuthHeaders(this.getSessionToken()));
  }
  public updateMobileInfo(requestBody) {
    return this.http.put(hostUrl+'mobile/update',requestBody,this.createAuthHeaders(this.getSessionToken()));
  }
  public addToCart(mobileId) {
    let customerId = sessionStorage.getItem('USER_ID');
    return this.http.post(hostUrl + 'cart/add/'+ customerId + '/' + mobileId,null,this.createAuthHeaders(this.getSessionToken()));
  }
  public getCartItems(){
    let customerId = sessionStorage.getItem('USER_ID');
    return this.http.get(hostUrl+ 'cart/mobilesincart/'+customerId, this.createAuthHeaders(this.getSessionToken()));
  }
  public deleteMobileFromCart(mobileId,cartId){
    return this.http.delete(hostUrl+'customer/mobile/'+mobileId+'/'+cartId,this.createAuthHeaders(this.getSessionToken()));
  }
  public searchMobilesByType(searchString, type){
    return this.http.get(hostUrl+'mobile/get/filter/search/'+searchString+'/'+type,this.createAuthHeaders(this.getSessionToken()));
  }
  // public placeOrder(requestBody){
  //   return this.http.post(hostUrl + 'order/place',requestBody,this.createAuthHeaders(this.getSessionToken()));
  // }
  public placeOrderByCartAndCustomer(customerId,cartId){
    return this.http.post(hostUrl + 'order/placedOrderFromCart/'+customerId +'/'+cartId,null,this.createAuthHeaders(this.getSessionToken()));
  }
  public getOrdersByUserId(userId){
    return this.http.get(hostUrl + 'customer/get/order/'+userId,this.createAuthHeaders(this.getSessionToken()));
  }
  public isUserLoggedIn() {
    return sessionStorage.getItem('SESSION_USER') === 'User';
  }
  public isAdminLoggedIn() {
    return sessionStorage.getItem('SESSION_USER') === 'Admin';
  }
  public getAllOrders() {
    return this.http.get(hostUrl + 'admin/getAll/orders',this.createAuthHeaders(this.getSessionToken()));
  }
  public getAllCustomers() {
    return this.http.get(hostUrl+'admin/allCustomer',this.createAuthHeaders(this.getSessionToken()));
  }
  public getCustomerById(custId){
    return this.http.get(hostUrl+'customer/get/'+custId,this.createAuthHeaders(this.getSessionToken()));
  }
  public editUser(reqBody){
    return this.http.put(hostUrl+'customer/edit/user',reqBody,this.createAuthHeaders(this.getSessionToken()));
  }
  public cancelOrder(id){
    return this.http.delete(hostUrl+'order/delete/'+id,this.createAuthHeaders(this.getSessionToken()));
  }
  public onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

  createAuthHeaders(token) {
    const headerDict = {
      'Authorization': token
    }
    let options = {
      headers: new HttpHeaders(headerDict)
    }
    return options;
  }

  getSessionToken() {
    return sessionStorage.getItem(authToken);
  }
}
