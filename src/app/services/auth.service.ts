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
  // Inject the Auth service and create a user observable
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  // Inject the Auth service and create a user observable
  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {
      // Set the user loggiedIn in local storage
      localStorage.setItem('user', 'loggedIn');
    });
    return from(promise);
  }
  // return true if use loggedin
  isLoggedIn() {
    if (this.currentUserSig()) {
      return true;
    }
    return false;
  }
  // remove the current user from local storage
  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      localStorage.removeItem('user');
    });
    return from(promise);
  }
}
