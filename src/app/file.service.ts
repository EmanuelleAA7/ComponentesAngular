import { Injectable } from '@angular/core';
// import { ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  // downloadFile(): Observable<HttpResponse<Blob>>{		
	//  return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'}).map((res)=>{}
  //  })
}
