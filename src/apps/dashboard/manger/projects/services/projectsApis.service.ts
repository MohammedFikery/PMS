import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApisService {

  constructor(private readonly _HttpClient: HttpClient) {}


  getAllProjects(paramsData: any): Observable<any> {
    return this._HttpClient.get('Project', { params: paramsData });
  }

  CreateProject(data: any): Observable<any> {
    return this._HttpClient.post('Project', data);
  }
  EditProject(data: any, id: Number): Observable<any> {
    return this._HttpClient.put(`Project/${id}`, data);
  }
  GetProjectById(id: Number): Observable<any> {
    return this._HttpClient.get(`Project/${id}`);
  }
}
