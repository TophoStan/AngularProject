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
      emailAdress: 'stijn@icloud.com',
      phoneNumber: '0612345678',
      isStudent: true,
    },
    {
      id: 1,
      firstName: 'Stan',
      lastName: 'Tophoven',
      emailAdress: 'saj.tophoven@mail.com',
      phoneNumber: '0612345678',
      isStudent: true,
    },
    {
      id: 2,
      firstName: 'Thomas',
      lastName: 'Quartel',
      emailAdress: 'Thomaaas@quartel.com',
      phoneNumber: '0612345678',
      isStudent: false,
    },
    {
      id: 3,
      firstName: 'Rogier',
      lastName: ' van de Gaag',
      emailAdress: 'Gaag@mail.com',
      phoneNumber: '061273765',
      isStudent: true,
    },
    {
      id: 4,
      firstName: 'Luuk',
      lastName: 'Vogel',
      emailAdress: 'LuukVogel@mail.com',
      phoneNumber: '2398475',
      isStudent: false,
    },
  ];

  constructor(private httpClient: HttpClient) {}

  getUsersAsObservable(): Observable<IUser[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    return this.httpClient.get<IUser[]>(
      'http://localhost:3333/api/data-api/user',
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
    console.log(updatedUser);

    let user = this.users.find((obj) => obj.id == updatedUser.id);
    let index = this.users.indexOf(user!);
    this.users[index] = updatedUser;
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
