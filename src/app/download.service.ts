import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  downloadFileSystem(filename: string): Observable<HttpResponse<string>> {
    // downloadFileSystem(): Observable<HttpResponse<string>> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/csv; charset=utf-8');
    return this.http.get(`http://localhost:8080/api/files/system/`+filename, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }

}
