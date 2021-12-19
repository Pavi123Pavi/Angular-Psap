import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'src/app/models/users.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:8080/users';

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  constructor(private _http: HttpClient) { }

  loginCheck(loginDetails){
    // return this._http.post<Boolean>(this.apiUrl+'/login',loginDetails, this.httpOptions);
    return of(true);
  }

  signup(signupDetails){
    return this._http.post<Boolean>(this.apiUrl+'/signup',signupDetails, this.httpOptions);
  }

}
