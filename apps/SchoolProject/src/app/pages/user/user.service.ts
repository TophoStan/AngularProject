import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '@schoolproject/data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: IUser[] = [
    {
      id: 0,
      firstName: 'Stijn',
      lastName: 'Spanjers',
      emailAddress: 'stijn@icloud.com',
      phoneNumber: '0612345678',
      isStudent: true,
    },
    {
      id: 1,
      firstName: 'Stan',
      lastName: 'Tophoven',
      emailAddress: 'saj.tophoven@mail.com',
      phoneNumber: '0612345678',
      isStudent: true,
    },
    {
      id: 2,
      firstName: 'Thomas',
      lastName: 'Quartel',
      emailAddress: 'Thomaaas@quartel.com',
      phoneNumber: '0612345678',
      isStudent: false,
    },
    {
      id: 3,
      firstName: 'Rogier',
      lastName: ' van de Gaag',
      emailAddress: 'Gaag@mail.com',
      phoneNumber: '061273765',
      isStudent: true,
    },
    {
      id: 4,
      firstName: 'Luuk',
      lastName: 'Vogel',
      emailAddress: 'LuukVogel@mail.com',
      phoneNumber: '2398475',
      isStudent: false,
    },
  ];

  constructor(private httpClient: HttpClient) {}

  getUsersAsObservable(): Observable<IUser[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const token = JSON.parse(localStorage.getItem('token') || '').token;

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
    const token = JSON.parse(localStorage.getItem('token') || '').token;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    console.log('Updating user.....');
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
}
