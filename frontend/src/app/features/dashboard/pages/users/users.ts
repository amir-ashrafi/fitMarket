
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User ,Representative } from '../../../../../type';
import { CustomerService } from '../../../../core/services/data-chart/customer';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Slider } from 'primeng/slider';
import { ProgressBar } from 'primeng/progressbar';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
    imports: [TableModule, Tag, ButtonModule, IconField, InputIcon, HttpClientModule,
    CommonModule, MultiSelectModule, InputTextModule, SelectModule, Slider,FormsModule, ProgressBar,Dialog, ButtonModule, InputTextModule],
    providers: [CustomerService],
    
  styleUrl: './users.css',
})
export class Users implements OnInit{
customers!: User[];
visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
searchValue: string = '';
statusFilterValue: string | null = null;
representativeFilterValue: any[] = [];

    selectedCustomers!: User[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private customerService: CustomerService) {}
clear(table: any) {
  table.clear();
  this.selectedCustomers = [];
  this.searchValue = '';
  this.activityValues = [0, 100];
  this.statusFilterValue = null;
  this.representativeFilterValue = [];
}
    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }
tablePt = {
    pcPaginator: {
        root: { className: 'p-2  flex bg-indigo-300 dark:bg-indigo-600 rounded-b-2xl text-white items-center justify-center mb-10' },
    },
    
};

   getSeverity(status: string): "danger" | "success" | "info" | "warn" | null {
    switch (status) {
        case 'unqualified': return 'danger';
        case 'qualified': return 'success';
        case 'new': return 'info';
        case 'negotiation': return 'warn';
        case 'renewal': return null;
        default: return null; 
    }
}
}
