import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _HttpClient:HttpClient) { }
   Delet(id:number):Observable<any>{
      return this._HttpClient.delete(`Project${id}`)
    }
}
