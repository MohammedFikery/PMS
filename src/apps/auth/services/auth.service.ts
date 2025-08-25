import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _HttpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) this.getProfile();
  }

  public email: string | any = '';

  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
  }

  Register(data: object): Observable<any> {
    return this._HttpClient.post(`Users/Register`, data);
  }

  login(data: any): Observable<any> {
    return this._HttpClient.post(`Users/Login`, data);
  }

  forgotPassword(data: any) {
    return this._HttpClient.post(`Users/Reset/Request`, data);
  }
}
