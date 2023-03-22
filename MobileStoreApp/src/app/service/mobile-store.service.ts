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

  public addCategory(requestBody){
    return this.http.post(hostUrl + 'admin/category/add', requestBody, this.createAuthHeaders(this.getSessionToken()));
  }

  public getAllCategories() {
    return this.http.get(hostUrl + 'admin/category/get/all', this.createAuthHeaders(this.getSessionToken()));
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
