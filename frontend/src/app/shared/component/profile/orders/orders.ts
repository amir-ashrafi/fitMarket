// src/app/pages/orders/orders-user.ts
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { OrderService } from '../../../../core/services/order-service';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { PersianDatePipe } from '../../../pipe/persian-date.pipe';

@Component({
  selector: 'app-orders-user',
  standalone: true,
  imports: [CommonModule, TableModule,PersianDatePipe, TagModule, ButtonModule, ChevronDown, ChevronLeft],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersUser {
  private orderService = inject(OrderService);

 
  orders = this.orderService.orders;

  getSeverity(status: string) {
    switch (status) {
      case 'تحویل داده شده':
        return 'success';
      case 'در انتظار بررسی':
        return 'warn';
      case 'لغو شده':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getSeverityLabel(status: string): string {
    return status ?? 'نامشخص';
  }
}