// src/app/service/productservice.ts
import { Injectable } from '@angular/core';
import { CATEGORY, Product } from '../../../../type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCategorySmall(): Promise<CATEGORY[]> {
        return Promise.resolve(this.getCategoryData().slice(0, 9));
    }

    private getCategoryData(): CATEGORY[] {
        return [
            {
        id:0,
        code:'CERATIN',
        name:'کراتین',
        src:'/category/0.png',
        link:'',
    },
    {
        id:1,
        code:'PROTEIN',
        name:'پروتئین',
        src:'/category/1.png',
        link:'',
    },
    {
        id:2,
        code:'VITAMIN',
        name:'ویتامین',
        src:'/category/2.png',
        link:'',
    },
    {
        id:3,
        code:'CLOTHES',
        name:'لباس تمرین',
        src:'/category/3.png',
        link:'',
    },
    {
        id:4,
        code:'CLOGS',
        name:'کتونی/کفش پیاده روی',
        src:'/category/4.png',
        link:'',
    },
    {
        id:5,
        code:'BODYBUILDING',
        name:'لوازم تمرین بدنسازی',
        src:'/category/5.png',
        link:'',
    },
    {
        id:6,
        code:'BAGS',
        name:'کیف و کوله ورزشی',
        src:'/category/6.png',
        link:'',
    },
        ];
    }
  getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products: Product[] = [
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
          },
          {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'INSTOCK',
            rating: 4
          },
          {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            description: 'Product Description',
            image: 'blue-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
          },
          {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            price: 29,
            category: 'Clothing',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
          },
          {
            id: '1004',
            code: 'h456wer53',
            name: 'Bracelet',
            description: 'Product Description',
            image: 'bracelet.jpg',
            price: 15,
            category: 'Accessories',
            quantity: 73,
            inventoryStatus: 'INSTOCK',
            rating: 4
          },
          {
            id: '1005',
            code: 'av2231fwg',
            name: 'Brown Purse',
            description: 'Product Description',
            image: 'brown-purse.jpg',
            price: 120,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
          }
        ];
        resolve(products);
      }, 100);
    });
  }
}