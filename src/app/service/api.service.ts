import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { UtilService } from '../utils/util.service';
// import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private httpClient: HttpClient, private utilityService: UtilService) { }
  Post<T>(apiEndPoint: string, data: unknown): Observable<T> {
    return this.httpClient.post<T>(environment.url + apiEndPoint, data);
  }

  PostById<T>(apiEndPoint: string, id: string, data: unknown): Observable<T> {
    return this.httpClient.post<T>(environment.url + apiEndPoint + `/${id}`, data);
  }

  Get<T>(apiEndPoint: string, queryParams?: unknown): Observable<T> {
    let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.get<T>(environment.url + apiEndPoint + qp)
  }

  GetById<T>(apiEndPoint: string, id: number, queryParams?: unknown): Observable<T> {
    let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.get<T>(environment.url + apiEndPoint + `/${id}` + qp)
  }

  Put<T>(apiEndPoint: string, data?: unknown): Observable<T> {
    return this.httpClient.put<T>(environment.url + apiEndPoint, data);
  }

  PutById<T>(apiEndPoint: string, id: number, data: unknown): Observable<T> {
    return this.httpClient.put<T>(environment.url + apiEndPoint + `/${id}`, data)
  }

  Delete<T>(apiEndPoint: string, id: number): Observable<T> {
    return this.httpClient.delete<T>(environment.url + apiEndPoint + `/${id}`)
  }
}
