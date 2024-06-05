import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rest1 } from '../interfaces/rest1';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  url:string="http://localhost:1153/users"

  constructor(private http:HttpClient) { }

  getRest():Observable<Rest1>{
    return this.http.get<Rest1>(this.url);
  }

  

}