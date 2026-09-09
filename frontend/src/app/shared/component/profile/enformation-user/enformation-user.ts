import { Component, inject } from '@angular/core';
import { Table } from "primeng/table";
import { AuthService } from '../../../../core/auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enformation-user',
  imports: [CommonModule],
  templateUrl: './enformation-user.html',
  styleUrl: './enformation-user.css',
})
export class EnformationUser {
  private auth = inject(AuthService);

  currentUser$ = this.auth.currentUser$;

  getRoleLabel(role?: string): string {
    switch (role) {
      case 'admin':
        return 'مدیر';
      case 'user':
        return 'کاربر عادی';
      default:
        return 'نامشخص';
    }
  }

  getStatusLabel(status?: string): string {
    return status ?? 'نامشخص';
  }
}
