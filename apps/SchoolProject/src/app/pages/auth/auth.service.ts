import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserRegistration,
  User,
  UserCredentials,
  Token,
} from '@schoolproject/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registerUser(userInfo: UserRegistration): Observable<User> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    console.log('Register called');

    return this.httpClient.post<User>(
      'http://localhost:3333/api/auth-api/register',
      userInfo,
      { headers: headers }
    );
  }
  loginUser(userLogin: UserCredentials) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    console.log('Login called');

    return this.httpClient.post<Token>(
      'http://localhost:3333/api/auth-api/login',
      userLogin,
      { headers: headers }
    );
  }
}
