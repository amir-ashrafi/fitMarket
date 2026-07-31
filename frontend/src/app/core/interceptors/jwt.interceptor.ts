// src/app/auth/jwt.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, catchError, filter, take, switchMap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getAccessToken();
    let cloned = req;
    if (token) {
      cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(cloned).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // try refresh once
          return this.handle401Error(cloned, next);
        }
        return throwError(() => err);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      // call refresh endpoint (AuthService.refreshToken uses withCredentials: true)
      return this.auth.refreshToken().pipe(
        switchMap((res: any) => {
          this.isRefreshing = false;
          const newToken = res?.accessToken;
          if (newToken) {
            this.refreshTokenSubject.next(newToken);
            // repeat original request with new token
            return next.handle(this.addToken(request, newToken));
          }
          // if no token, logout / fail
          return throwError(() => new Error('No refresh token'));
        }),
        catchError(err => {
          this.isRefreshing = false;
          this.auth.logout().subscribe(); // clear state
          return throwError(() => err);
        })
      );
    } else {
      // queue the requests until refresh completes
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(request, token as string));
        })
      );
    }
  }

  private addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
