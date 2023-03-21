import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { hostUrl } from 'src/constants';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MobileStoreService {

  constructor(public http: HttpClient, public router:Router) { }

  public addUser(request) {
    return this.http.post(hostUrl + 'authentication/register', request);
  }

  public login(request) {
    return this.http.post(hostUrl + 'authentication/login', request);
  }

  public retrieveMobiles(token) {
    const headerDict = {
      'Authorization': token
    }
    let options = {
      headers: new HttpHeaders(headerDict)
    }
    return this.http.get(hostUrl + 'mobile/getAll', options);
  }

  public onLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
