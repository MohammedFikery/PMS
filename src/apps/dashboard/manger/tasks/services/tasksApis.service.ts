import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksApisService {
  constructor(private _HttpClient: HttpClient) {}

  getAllTasks(paramsData: any): Observable<any> {
    return this._HttpClient.get('Task/Manager', { params: paramsData });
  }
}
