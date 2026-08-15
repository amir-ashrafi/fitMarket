import { Component, ViewEncapsulation, ChangeDetectionStrategy, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { PIcon } from '@primeicons/angular/p-icon';
import { link } from 'fs';
import { Search_C } from "../../../../shared/component/search/search";
@Component({
  selector: 'app-header',
  imports: [ButtonModule, RouterLink, PIcon, ButtonModule, Search_C],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {
  icon = ['sign-in','heart','shopping-cart']
  buttons = [
    {
      name:'خانه',
     icon:'home',
     link:'/'
    },
    {
      name:'دسته بندی',
     icon:'th-large',
     link:'/products'
    },
    {
      name:'سبد خرید',
     icon:'shopping-cart',
     link:'/buying'
    },
    {
      name:'وبلاگ',
     icon:'book',
     link:'/blogs'
    },
    {
      name:'مارکت من',
     icon:'user',
     link:'/auth/login'
    },
  ]
  icons = ['home', 'star', 'heart', 'bell'];
  selectedIcon = signal<string>('');
}
