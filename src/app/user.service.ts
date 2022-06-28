import { Admin } from './admin';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  public userLoginFromRemote(user : User) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8086/loginuser", user);
  }

  public userRegisterFromRemote(user : User) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8086/registeruser", user);
  }

  public adminLoginFromRemote(admin : Admin) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8086/adminlogin", admin);
  }
}
