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
  user: IUser | undefined = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    isStudent: false,
    roles: ['user'],
  };
  staticUser: IUser | undefined;
  userId: string | null = null;
  userExists: boolean = false;
  faCheck = faCheck;
  faTimes = faTimes;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      //Edit
      console.log(`UserId: ${this.userId}`);

      if (this.userId) {
        this.userExists = true;

        // this.user = {
        //   ...JSON.parse(
        //     JSON.stringify(this.userService.getUserById(Number(this.userId)))
        //   ),
        // };
        this.userService
          .getUserByIdAsObservable(this.userId)
          .subscribe((user: IUser) => {
            console.log(user);
            this.staticUser = {
              ...JSON.parse(JSON.stringify(user)),
            };
            this.user = {
              ...JSON.parse(JSON.stringify(user)),
            };
          });
        //Create
      } else {
        console.log('No id was found');

        this.user = {
          id: 0,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailAddress: '',
          isStudent: false,
          roles: ['user'],
        };
      }
    });
  }
  onSubmit(): void {
    console.log('Submit');
    if (this.userExists) {
      console.log('Update user');
      this.userService.updateUser(this.user!).subscribe((user) => {
        console.log('Succesfully updated user');
      });
      this.router.navigate(['user']);
    } else {
      console.log('Add user');
      this.userService.addUser(this.user!);
      this.router.navigate(['user']);
    }
  }
}
