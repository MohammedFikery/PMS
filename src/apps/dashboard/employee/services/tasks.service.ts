import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _HttpClient:HttpClient) { }


  getAllAssignedTasks(data:any):Observable<any>{
 
    return this._HttpClient.get('Task/', {params:data})
  }


  changeMyStatus(id:any , status:any):Observable<any>{
    return this._HttpClient.put(`Task/${id}/change-status` , status)
  }


}
