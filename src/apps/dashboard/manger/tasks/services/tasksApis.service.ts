import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksApisService {
  constructor(private readonly _HttpClient: HttpClient) {}
  CreateTask(data: any): Observable<any> {
    return this._HttpClient.post('Task', data);
  }
  EditTask(data: any, id: Number): Observable<any> {
    return this._HttpClient.put(`Task/${id}`, data);
  }
  getAllTasks(paramsData: any): Observable<any> {
    return this._HttpClient.get('Task/Manager', { params: paramsData });
  }
}
