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
import { AuthService } from '../../auth/auth.service';
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
  isAdmin = false;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUsersAsObservable()
      .pipe()
      .subscribe((usersData: IUser[]) => {
        this.users = usersData;
        console.log(usersData);
        this.isAdmin = this.authService.isAdmin();
      });
  }
  deleteUser(id: number): void {
    console.log('delete');
    this.userService.deleteUser(id);
  }
}
