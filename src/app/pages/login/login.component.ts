import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //login object
  loginObj: Login;

  //injections
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.loginObj = new Login('', '');
  }
  //error message
  errorMessage: string | null = null;
  //login function to call the login service
  onLogin() {
    this.authService
      .login(this.loginObj.email, this.loginObj.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.loginObj = new Login('', '');
          //setting the error message
          this.errorMessage = err.message;
        },
      });
  }
}
//login class
export class Login {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
