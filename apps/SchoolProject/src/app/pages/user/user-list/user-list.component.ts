import { Component, OnInit } from '@angular/core';
import { IUser } from '@schoolproject/data';
import { UserService } from '../user.service';
import {
  faCheck,
  faSchool,
  faExclamationCircle,
  faMarsStroke,
  faPencilAlt,
  faScroll,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  faTrash = faTrash;
  faPencil = faPencilAlt;
  faScroll = faScroll;
  faCheck = faCheck;
  faSchool = faSchool;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsersAsObservable()
      .pipe()
      .subscribe((usersData: IUser[]) => {
        this.users = usersData;
        console.log(usersData);
      });
  }
  deleteUser(id: number): void {
    console.log('delte');
    this.userService.deleteUser(id);
  }
}
