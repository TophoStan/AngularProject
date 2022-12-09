import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '@schoolproject/data';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user!: UserRegistration;
  faCheck = faCheck;
  faTimes = faTimes;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = {
      emailAddress: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      isStudent: false,
    };
  }

  onSubmit(): void {
    this.authService.registerUser(this.user).subscribe((result) => {
      if (result.id) {
        this.router.navigate(['user']);
      }
    });
  }
}
