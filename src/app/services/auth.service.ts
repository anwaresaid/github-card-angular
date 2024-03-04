import { Injectable, inject, signal } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);

  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  loading = false;

  login(email: string, password: string): Observable<void> {
    this.loading = true;
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {
      localStorage.setItem('user', 'loggedIn');
      this.loading = false;
    });
    return from(promise);
  }

  isLoggedIn() {
    if (this.currentUserSig()) {
      return true;
    }
    return false;
  }
  isLoding() {
    return this.loading;
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      localStorage.removeItem('user');
    });
    return from(promise);
  }
}
