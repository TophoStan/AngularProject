import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserRegistration,
  User,
  UserCredentials,
  Token,
} from '@schoolproject/data';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedStatus = new BehaviorSubject(
    localStorage.getItem('token') ? true : false
  );

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
  get loginStatus() {
    return this.loggedStatus.getValue();
  }
  isAdmin(): boolean {
    const logged = this.loginStatus;
    if (logged) {
      const user = JSON.parse(localStorage.getItem('user') || '');
      if (user.roles.includes('admin')) {
        return true;
      }
    }
    return false;
  }
  set loginStatus(logout: boolean) {
    this.loggedStatus.next(logout);
    if (logout) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }
}
