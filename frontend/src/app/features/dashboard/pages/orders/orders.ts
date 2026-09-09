import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { OrderService } from '../../../../core/services/order-service';
import { MessageService } from 'primeng/api';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../../../type';
import { Slider } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-orders',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    TableModule, TagModule, ToastModule, RatingModule, ButtonModule,
    FormsModule, CommonModule, InputGroupModule, DatePicker,
    InputGroupAddonModule, Slider, InputTextModule
  ],
  providers: [MessageService],
  templateUrl: './orders.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  customers: Customer[] = [];
  value: number = 50;
  value2: string | undefined;
  statuses: any[] = [];
  date: Date = new Date();
  expandedRows: { [key: string]: boolean } = {};

  constructor(
    private orderService: OrderService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.customers = this.orderService.orders();
    this.statuses = [
      { label: 'در انتظار بررسی', value: 'در انتظار بررسی' },
      { label: 'تحویل داده شده', value: 'تحویل داده شده' },
      { label: 'لغو شده', value: 'لغو شده' },
    ];
  }

  expandAll() {
    this.expandedRows = this.customers.reduce((acc, customer) => {
      if (customer.id) {
        acc[customer.id] = true;
      }
      return acc;
    }, {} as { [key: string]: boolean });
  }

  collapseAll() {
    this.expandedRows = {};
  }

  getSeverity(status?: string) {
    switch (status) {
      case 'تحویل داده شده': return 'success';
      case 'در انتظار بررسی': return 'warn';
      case 'لغو شده': return 'danger';
      default: return 'secondary';
    }
  }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'سفارش باز شد',
      detail: event.data.fullName,
      life: 3000
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'سفارش بسته شد',
      detail: event.data.fullName,
      life: 3000
    });
  }
}