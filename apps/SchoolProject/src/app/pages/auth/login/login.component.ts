import { Component, OnInit } from '@angular/core';
import { UserCredentials, Token } from '@schoolproject/data';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user!: UserCredentials;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService // private jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.user = {
      password: '',
      emailAddress: '',
    };
  }
  onSubmit(): void {
    this.authService.loginUser(this.user).subscribe((token: Token) => {
      if (token) {
        console.log('Login');
        localStorage.setItem('token', JSON.stringify(token) || '');
        this.userService.getSelf().subscribe((user) => {
          console.log(user);
          localStorage.setItem('token', JSON.stringify(token) || '');
          localStorage.setItem('user', JSON.stringify(user) || '');
        });
        this.authService.loginStatus = true;
        this.router.navigate(['']);
      }
    });
  }
}
