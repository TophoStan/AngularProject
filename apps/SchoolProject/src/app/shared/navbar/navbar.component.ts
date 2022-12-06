import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.loggedStatus.subscribe((nextValue) => {
      this.userLoggedIn = nextValue;
    });
  }
  isLoggedIn(): boolean {
    return this.authService.loginStatus.valueOf();
  }
  logout(): void {
    this.authService.loginStatus = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
