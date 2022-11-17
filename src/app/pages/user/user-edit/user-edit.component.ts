import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  user: User | undefined;
  staticUser: User | undefined;
  userId: string | null = null;
  componentExists: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.componentExists = true;
        this.staticUser = this.userService.getUserById(Number(this.userId));
        this.user = {
          ...JSON.parse(
            JSON.stringify(this.userService.getUserById(Number(this.userId)))
          ),
        };
      } else {
        this.user = new User();
      }
    });
  }
  onSubmit(): void {
    if (this.componentExists) {
      console.log('Submitted');
      this.userService.updateUser(this.user!);
      this.router.navigate(['user']);
    }
  }
}
