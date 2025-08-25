import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private readonly _HttpClient: HttpClient) {}
  getCurrentUser(): Observable<any> {
    return this._HttpClient.get('Users/currentUser');
  }
}
