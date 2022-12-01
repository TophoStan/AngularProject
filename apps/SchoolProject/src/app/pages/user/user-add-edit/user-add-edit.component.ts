import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '@schoolproject/data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
})
export class UserAddEditComponent implements OnInit {
  user: IUser | undefined;
  staticUser: IUser | undefined;
  userId: string | null = null;
  userExists: boolean = false;
  faCheck = faCheck;
  faTimes = faTimes;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      //Edit
      if (this.userId) {
        this.userExists = true;
        this.staticUser = this.userService.getUserById(Number(this.userId));
        this.user = {
          ...JSON.parse(
            JSON.stringify(this.userService.getUserById(Number(this.userId)))
          ),
        };
        //Create
      } else {
        this.user = {
          id: 0,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailAdress: '',
          isStudent: false,
        };
      }
    });
  }
  onSubmit(): void {
    console.log('Submit');
    if (this.userExists) {
      console.log('Update user');
      this.userService.updateUser(this.user!);
      this.router.navigate(['user']);
    } else {
      console.log('Add user');
      this.userService.addUser(this.user!);
      this.router.navigate(['user']);
    }
  }
}
