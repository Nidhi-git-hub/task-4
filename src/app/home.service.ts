import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url="http://127.0.0.1:8000/api/";

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    return this.http.get(this.url+'show-blogs')
  }
  getBlog(BlogID: number):Observable<any>{
    return this.http.get<Blog>(this.url + 'show/' + BlogID);
  }
}