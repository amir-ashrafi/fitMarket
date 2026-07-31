// src/app/auth/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRoles: string[] = route.data['roles'];
    return this.auth.currentUser$.pipe(
      take(1),
      map(user => {
        if (user && expectedRoles.includes(user.role)) return true;
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
