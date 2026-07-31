import { Component } from '@angular/core';
import { Features } from '../../../../../type';

@Component({
  selector: 'app-product-features',
  imports: [],
  templateUrl: './product-features.html',
  styleUrl: './product-features.css',
})
export class ProductFeatures {
  features:Features[]=[
    {
      id:0,
      icon:'pi pi-comments',
      header:'پشتیبانی ۲۴/۷',
      article:'پاسخگویی در تمام ساعات شبانه‌روز',
    },
    {
      id:1,
      icon:'pi pi-address-book',
      header:'برنامه اختصاصی',
      article:'مشاوره و برنامه تمرینی با مربیان حرفه‌ای',
    },
    {
      id:2,
      icon:'pi pi-crown',
      header:'ضمانت اصالت',
      article:'برای محصولات اورجینال',
    },
    {
      id:3,
      icon:'pi pi-fast-forward',
      header:'ارسال سریع',
      article:'ارسال به سراسر کشور در کمترین زمان',
    },
    {
      id:4,
      icon:'pi pi-history',
      header:'ضمانت بازگشت',
      article:'امکان برگشت تا 7 روز',
    },
  ]
}
