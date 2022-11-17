import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      firstName: 'Stijn',
      lastName: 'Spanjers',
      emailAdress: 'stijn@icloud.com',
      phoneNumber: '0612345678',
    },
    {
      id: 1,
      firstName: 'Stan',
      lastName: 'Tophoven',
      emailAdress: 'saj.tophoven@mail.com',
      phoneNumber: '0612345678',
    },
    {
      id: 2,
      firstName: 'Thomas',
      lastName: 'Quartel',
      emailAdress: 'Thomaaas@quartel.com',
      phoneNumber: '0612345678',
    },
  ];

  getUsersAsObservable(): Observable<User[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    return of(this.users);
  }

  getUserById(id: number): User {
    return this.users.filter((c) => c.id == id)[0];
  }

  getUsers(): User[] {
    return this.users;
  }
  addUser(user: User) {
    console.log(user);
    user.id = this.users.length;
    this.users.push(user);
  }
  updateUser(updatedUser: User) {
    console.log(updatedUser);

    let user = this.users.find((obj) => obj.id == updatedUser.id);
    let index = this.users.indexOf(user!);
    this.users[index] = updatedUser;
  }
}
