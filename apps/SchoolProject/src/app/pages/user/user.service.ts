import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '@schoolproject/data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: IUser[] = [];

  constructor(private httpClient: HttpClient) {}

  getUsersAsObservable(): Observable<IUser[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    let token;
    if (localStorage.getItem('token')) {
      token = JSON.parse(localStorage.getItem('token') || '').token;
    }

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IUser[]>(
      'http://localhost:3333/api/data-api/user',
      {
        headers: headers,
      }
    );
  }
  getUserByIdAsObservable(id: string): Observable<IUser> {
    console.log('getUserByIdAsObservable aangeroepen');
    const token = JSON.parse(localStorage.getItem('token') || '').token;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IUser>(
      `http://localhost:3333/api/data-api/user/${id}`,
      {
        headers: headers,
      }
    );
  }
  getSelf(): Observable<IUser> {
    console.log('getself');

    const token = JSON.parse(localStorage.getItem('token') || '').token;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.get<IUser>(
      `http://localhost:3333/api/data-api/user/self`,
      {
        headers: headers,
      }
    );
  }

  getUserById(id: number): IUser {
    const user = this.users.filter((c) => c.id == id)[0];
    if (user !== undefined) {
      return user;
    } else {
      throw new Error('User list is empty');
    }
  }

  getUsers(): IUser[] {
    return this.users;
  }
  addUser(user: IUser) {
    console.log(user);
    user.id = this.users.length;
    this.users.push(user);
  }
  updateUser(updatedUser: IUser) {
    console.log('Updating user.....');
    const token = JSON.parse(localStorage.getItem('token') || '').token;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.put<IUser>(
      `http://localhost:3333/api/data-api/user/${updatedUser.id}`,
      updatedUser,
      {
        headers: headers,
      }
    );
  }
  deleteUser(id: number) {
    let user = this.users.find((obj) => obj.id == id);
    let index = this.users.indexOf(user!);
    this.users.splice(index, 1);
  }
  clearUsers() {
    this.users.splice(0);
  }
  addBookToBookListUser(booklistId: string, bookId: string) {
    const token = JSON.parse(localStorage.getItem('token') || '').token;
    const user = JSON.parse(localStorage.getItem('user') || '');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.put<IUser>(
      `http://localhost:3333/api/data-api/user/${user.id}/booklist`,
      { booklistId, bookId },
      {
        headers: headers,
      }
    );
  }
  removeBookFromBookListUser(booklistId: string, bookId: string) {
    const token = JSON.parse(localStorage.getItem('token') || '').token;
    const user = JSON.parse(localStorage.getItem('user') || '');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.httpClient.delete<IUser>(
      `http://localhost:3333/api/data-api/user/${user.id}/booklist`,
      { body: { booklistId, bookId }, headers: headers }
    );
  }
}
