import { Component, input, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';
import { MenuItems } from '../../../../../type';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsDark, selectThemeMode } from '../../store';

@Component({
  selector: 'admin-sidebar',
  imports: [ ToastModule, ImageModule,RouterModule],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar{
  isDark$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isDark$ = this.store.select(selectIsDark);
console.log(this.isDark$)
    this.isDark$.subscribe(val => console.log('isDark value:', val));
  }
    menuControl = input<() => void>();
    menuItem:MenuItems[] = [
      {
        id:0,
        label: 'خانه',
        items: [
          {id:0, label: 'داشبورد', icon: 'pi pi-home', routerLink: '/admin-panel', url: '/admin-panel' }
        ]
      },
      {
        id:1,
        label: 'کاربر',
        items: [
          {id:0, label: 'مدیریت کاربران', icon: 'pi pi-users', routerLink: '/admin-panel/users', url: '/admin-panel/users' },
          {id:1, label: 'افزودن کاربر جدید', icon: 'pi pi-user-plus', routerLink: '/admin-panel/users/new', url: '/admin-panel/users/new' }
        ]
      },
      {
        id:2,
        label: 'محصولات',
        items: [
          {id:0, label: 'فهرست محصولات', icon: 'pi pi-box', routerLink: '/admin-panel/products', url: '/admin-panel/products' },
          {id:1, label: 'لیست سفارشات', icon: 'pi pi-box', routerLink: '/admin-panel/orders', url: '/admin-panel/orders' },
          {id:3, label: 'افزودن محصول', icon: 'pi pi-plus', routerLink: '/admin-panel/products/ce-product', url: '/admin-panel/products/ce-product' }
        ]
      },
      {
        id:3,
        label: 'وبلاگ',
        items: [
          {id:0, label: 'فهرست بلاگ‌ها', icon: 'pi pi-list', routerLink: '/admin-panel/blogs', url: '/admin-panel/blogs' },
          {id:1, label: 'افزودن بلاگ جدید', icon: 'pi pi-plus', routerLink: '/admin-panel/blogs/ce-blog', url: '/admin-panel/blogs/ce-blog' }
        ]
      },
      {
        id:4,
        label: 'پروفایل',
        items: [
          {id:0, label: 'تنظیمات', icon: 'pi pi-cog', routerLink: '/admin-panel/profile', url: '/admin-panel/profile' },
          {id:1, label: 'خروج', icon: 'pi pi-sign-out', routerLink: '/', url: '/' }
        ]
      }
    ];
  }

