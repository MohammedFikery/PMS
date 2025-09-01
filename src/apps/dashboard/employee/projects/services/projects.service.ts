import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

constructor(private _HttpClient:HttpClient) { }

  getAllProjects(paramsData: any): Observable<any> {
    return this._HttpClient.get('Project/employee', { params: paramsData });
  }

}
