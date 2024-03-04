import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService = inject(AuthService);

  // Inject the AuthService and subscribe to the user observable
  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          name: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
    });
  }
  title = 'github-card';
}
