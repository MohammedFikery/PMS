import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApisService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProjects(paramsData: any): Observable<any> {
    return this._HttpClient.get('Project', {params: paramsData});
  }
}
