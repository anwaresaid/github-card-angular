import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDlJdARzEp6hy704UUNnsp3ijqYI23_MTg',
  authDomain: 'fir-auth-angular-14c6b.firebaseapp.com',
  projectId: 'fir-auth-angular-14c6b',
  storageBucket: 'fir-auth-angular-14c6b.appspot.com',
  messagingSenderId: '968453842191',
  appId: '1:968453842191:web:577f8c618515cce1d44a7a',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ]),
  ],
};
