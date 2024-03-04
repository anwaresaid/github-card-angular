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
  loginObj: Login;
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.loginObj = new Login('', '');
  }
  errorMessage: string | null = null;
  onLogin() {
    this.authService
      .login(this.loginObj.email, this.loginObj.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.loginObj = new Login('', '');
          this.errorMessage = err.message;
        },
      });
  }
}
export class Login {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
