import { Injectable } from '@angular/core';
import { LoginResponse, User } from '../../../../type'; 
import { environment } from '../../../environments/environments';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = environment.apiUrl; 
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private accessToken: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  init(): Promise<void> {
    return this.refreshToken().toPromise().then(() => {}).catch(() => {});
  }

  register(email: string, password: string) {
    return this.http.post(`${this.api}/auth/register`, { email, password });
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(
      `${this.api}/auth/login`,
      { email, password },
      { withCredentials: true } 
    ).pipe(
      tap(res => {
        this.setAccessToken(res.accessToken);
        const payload = this.parseJwt(res.accessToken);
        if (payload) {
          this.currentUserSubject.next({
            id: payload.sub,
            email: payload.email,
            role: payload.role,
          });
        }
      })
    );
  }

  logout() {
    return this.http.post(`${this.api}/auth/logout`, {}, { withCredentials: true }).pipe(
      tap(() => {
        this.clearAuth();
        this.router.navigate(['/auth/login']);
      }),
      catchError(err => {
        this.clearAuth();
        this.router.navigate(['/auth/login']);
        return of(null);
      })
    );
  }

  refreshToken(): Observable<{ accessToken: string } | null> {
    return this.http.post<{ accessToken: string }>(
      `${this.api}/auth/refresh`,
      {},
      { withCredentials: true }
    ).pipe(
      tap(res => {
        if (res && res.accessToken) {
          this.setAccessToken(res.accessToken);
          const payload = this.parseJwt(res.accessToken);
          if (payload) {
            this.currentUserSubject.next({
              id: payload.sub,
              email: payload.email,
              role: payload.role,
            });
          }
        }
      }),
      catchError(err => {
        this.clearAuth();
        return of(null);
      })
    );
  }

  getAccessToken() {
    return this.accessToken;
  }

  private setAccessToken(token: string) {
    this.accessToken = token;
  }

  private clearAuth() {
    this.accessToken = null;
    this.currentUserSubject.next(null);
  }

  private parseJwt(token: string | null) {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      return decoded;
    } catch {
      return null;
    }
  }
}