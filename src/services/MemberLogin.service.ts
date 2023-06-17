import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Routes } from './routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(user: object): Observable<any> {
    return new Observable<any>(observer => {
      axios.post(Routes.MEMBER_ROUTES.LOGIN_USER(), user)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  isLoggedIn(): boolean {
    const id = this.getToken('userId');
    return id !== null;
  }

  getToken(name: string): string {
    return localStorage.getItem(name) as string;
  }

  setToken(name: string, token: string): void {
    localStorage.setItem(name, token);
  }

  signout(name: string): Observable<any> {
    return new Observable<any>(observer => {
      localStorage.removeItem(name);
      observer.next();
      observer.complete();
    });
  }
}
