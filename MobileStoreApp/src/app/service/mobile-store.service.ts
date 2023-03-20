import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileStoreService {

  constructor(public http:HttpClient) { }

  public retrieveMobiles() {
    return this.http.get('http://localhost:8080/mobile/getAll');
  }
}
