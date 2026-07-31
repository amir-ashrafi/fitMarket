import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerService } from '../../../../core/services/data-chart/customer';
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
import { InputMask } from 'primeng/inputmask';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
@Component({
  selector: 'app-orders',
  standalone: true,
  encapsulation:ViewEncapsulation.None,
  imports: [
    TableModule,
    TagModule,
    ToastModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    CommonModule, InputGroupModule,DatePicker ,InputGroupAddonModule, Slider, InputTextModule
  ],
  providers: [CustomerService, MessageService],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  customers!: Customer[];
  value: number = 50;
      value2: string | undefined;

    statuses: any[]=[];
date: Date = new Date();

  expandedRows: { [key: string]: boolean } = {};

  constructor(
    private customerService: CustomerService, 
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.customerService.getProductsWithOrdersSmall().then(data => {
      this.customers = data;
    });
    this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
  }

  expandAll() {
    this.expandedRows = this.customers.reduce((acc, customer) => {
      acc[customer.id!] = true;
      return acc;
    }, {} as { [key: string]: boolean });
  }

  collapseAll() {
    this.expandedRows = {};
  }


  getSeverity(inventoryStatus: string) {
    switch (inventoryStatus) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warn';
      case 'OUTOFSTOCK': return 'danger';
      default: return 'secondary';
    }
  }

  getStatusSeverity(orderStatus: string) {
    switch (orderStatus) {
      case 'PENDING': return 'warn';
      case 'DELIVERED': return 'success';
      case 'CANCELLED': return 'danger';
      default: return 'secondary';
    }
  }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Customer Expanded',
      detail: event.data.name,
      life: 3000
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Customer Collapsed',
      detail: event.data.name,
      life: 3000
    });
  }
}