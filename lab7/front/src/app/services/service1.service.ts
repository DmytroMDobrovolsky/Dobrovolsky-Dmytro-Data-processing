import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rest1 } from '../interfaces/rest1';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url:string="http://localhost:1153/users";

  constructor(private http:HttpClient) { }

  getRest():Observable<Rest1> {
    return this.http.get<Rest1>(this.url);
  }

  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.url, user);
  }

  updateUser(user: User): Observable<any> {
if (user._links)   
    return this.http.put<User[]>(user._links.self.href , user);
else
return this.getRest();

}

  deleteUser(url:string): Observable<User[]> {
    return this.http.delete<User[]>(url);
  }
}