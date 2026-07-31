import { CardModule } from 'primeng/card';
import { CardItem } from '../../../../../type';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect, ViewEncapsulation } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '../../../../core/services/data-chart/appConfigService';
import { DesignerService } from '../../../../core/services/data-chart/designer';
import { Customer } from '../../../../../type';
import { CustomerService } from '../../../../core/services/data-chart/customer';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ProductChart } from "../../../../shared/component/product-chart/product-chart";
import { ViewChart } from "../../../../shared/component/view-chart/view-chart";

@Component({
  selector: 'app-main',
  imports: [CardModule, CommonModule, ChartModule, TableModule, FormsModule, ProductChart, ViewChart],

  templateUrl: './main.html',
  styleUrl: './main.css',
 encapsulation:ViewEncapsulation.Emulated
})
export class Main implements OnInit {
  constructor(private cd: ChangeDetectorRef,private  customerService: CustomerService) {}
  customers!: Customer[];
  
  selectedCustomer!: Customer;
  data: any;
  
  
  
    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);
    

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
      });
      
      ngOnInit() {
        this.initChart();
        this.customerService.getProductsMini().then((data) => {
            this.customers = data;
        });
    }

    initChart() {
  if (isPlatformBrowser(this.platformId)) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--color-textColor');
    const textColorSecondary = documentStyle.getPropertyValue('--color-textColorSecondary');
    const surfaceBorder = documentStyle.getPropertyValue('--color-surfaceBorder');
    const borderColor = documentStyle.getPropertyValue('--color-border-chart');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 400); 
    gradient.addColorStop(0, 'oklch(47.916% 0.29872 276.072 / 0.29)');   
    gradient.addColorStop(1, 'oklch(68.114% 0.18739 293.861)');                      
    
    this.data = {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر','آبان','آذر','دی','بهمن','اسفند'],
      datasets: [
        {
          label: 'فروش ماهانه',
          data: [65, 59, 80, 81, 56, 55, 40,50,80,40,24,44],
          backgroundColor: gradient,      
          borderColor: borderColor, 
          borderWidth: 1,
          borderRadius: {
          topLeft: 14,
          topRight: 14,
          bottomLeft: 0,
          bottomRight: 0
        }, 
        borderSkipped: false
        }
      ]
    };
    
    this.options = {
      maintainAspectRatio: false,
      barPercentage: 0.2,      
      categoryPercentage: 2.5,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            font: {
              size: 30,        
              weight: 900
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: { weight: 500 }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.cd.markForCheck();
  }
}
cardMenu:CardItem[] =[
  {
    id:0,
    name:'سفارشات',
    amount:200,
    icon:'pi pi-shopping-cart',
    color:'blue',
    color_icon:'bg-indigo-500/20 px-3 py-2 rounded-md text-indigo-600 dark:text-white dark:bg-indigo-500/80',
    changeAmount:24,
    title:'از هفته گذشته'
  },
  {
    id:1,
    name:'درامد',
    amount:20010,
    icon:'pi pi-dollar',
    color:'blue',
    color_icon:'bg-green-500/20 px-3 py-2 rounded-md text-green-600 dark:text-white dark:bg-green-500/80',
    changeAmount:52,
    title:'از هفته گذشته'
  },
  {
    id:2,
    name:'مشتری',
    amount:28441,
    icon:'pi pi-users',
    color:'blue',
    color_icon:'bg-sky-500/20 px-3 py-2 rounded-md text-sky-600 dark:text-white dark:bg-blue-500/80',
    changeAmount:24,
    title:'از ماه گذشته'
  },
  {
    id:3,
    name:'محصولات',
    amount:55,
    icon:'pi pi-shopping-bag',
    color:'blue',
    color_icon:'bg-red-500/20 px-3 py-2 rounded-md text-red-600 dark:text-white dark:bg-red-500/80',
    changeAmount:24,
    title:'از ابتدای سال'
  }
]
}
