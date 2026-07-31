import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Products } from './pages/products/products';
import { Orders } from './pages/orders/orders';
import { Users } from './pages/users/users';
import { Dashboard } from './dashboard';
import { Blogs } from './pages/blogs/blogs';
import { Profile } from './pages/profile/profile';
import { CeBlog } from './pages/ce-blog/ce-blog';
import { CeProduct } from './pages/ce-product/ce-product';

export const ADMINROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        component: Main,
      },
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'orders',
        component: Orders,
      },
      {
        path: 'users',
        component: Users,
      },
      {
        path: 'blogs',
        component: Blogs,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'blogs/ce-blog',
        component: CeBlog,
      },
      {
        path: 'products/ce-product',
        component: CeProduct,
      }
    ] 
  } 
]; 