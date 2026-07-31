// src/service/productservice.ts
import { Injectable } from '@angular/core';
import { Customer } from '../../../../type';
import { User } from '../../../../type';
@Injectable({
    providedIn: 'root' 
})
export class CustomerService {
  getProductsWithOrdersSmall(): Promise<Customer[]> {
  const customers: Customer[] = [
     {
    id: '1000',
    fullName: 'داوود جیمز',
    purchaseDate: '1402/01/03',
    phone: '09123456789',
    email: 'david.james@example.com',
    avatar: 'david-james.jpg',
    status: 'در انتظار بررسی',
    totalAmount: 65,
    orders: [
      {
        id: '1000-0',
        productName: 'ساعت بامبو',
        productImage: 'bamboo-watch.jpg',
        price: 65,
        quantity: 1,
        category: 'اکسسوری'
      }
    ]
  },
  {
    id: '1001',
    fullName: 'اما ویلسون',
    purchaseDate: '1402/01/10',
    phone: '09987654321',
    email: 'emma.wilson@example.com',
    avatar: 'emma-wilson.jpg',
    status: 'تحویل داده شده',
    totalAmount: 210,
    orders: [
      {
        id: '1001-0',
        productName: 'ساعت مشکی',
        productImage: 'black-watch.jpg',
        price: 72,
        quantity: 1,
        category: 'اکسسوری'
      },
      {
        id: '1001-1',
        productName: 'دستبند هوشمند',
        productImage: 'fitness-tracker.jpg',
        price: 138,
        quantity: 2,
        category: 'ورزشی'
      }
    ]
  },
  {
    id: '1002',
    fullName: 'سارا کانر',
    purchaseDate: '1402/01/15',
    phone: '09112233445',
    email: 'sarah.connor@example.com',
    avatar: 'sarah-connor.jpg',
    status: 'در انتظار بررسی',
    totalAmount: 79,
    orders: [
      {
        id: '1002-0',
        productName: 'بند آبی',
        productImage: 'blue-band.jpg',
        price: 79,
        quantity: 1,
        category: 'ورزشی'
      }
    ]
  }
  ];

  return Promise.resolve(customers);
}
      getCustomersLarge(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const customers: User[] = [
          {
            id: '1000',
            email:'ashrfya628@gmail.com',
            role:'admin',
            name: 'James Butt',
            country: { name: 'Algeria', code: 'dz' },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            activity: 45,
            representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            verified: true
          },
          {
            id:'1001',
            email:'ashrfy28@gmail.com',
            role:'user',
            name: 'Josephine Darakjy',
            country: { name: 'Egypt', code: 'eg' },
            company: 'Chanay, Jeffrey A Esq',
            date: '2019-02-09',
            status: 'qualified',
            activity: 78,
            representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
            verified: false
          },
          {
            id: '1002',
            email:'ashrf8@gmail.com',
            role:'user',
            name: 'Art Venere',
            country: { name: 'Russia', code: 'ru' },
            company: 'Chemel, James L Cpa',
            date: '2017-05-12',
            status: 'negotiation',
            activity: 55,
            representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            verified: true
          },
          {
            id: '1003',
            email:'ashr@gmail.com',
            role:'user',
            name: 'Lenna Paprocki',
            country: { name: 'Argentina', code: 'ar' },
            company: 'Feltz Printing Service',
            date: '2020-11-21',
            status: 'new',
            activity: 23,
            representative: { name: 'Anna Fali', image: 'annafali.png' },
            verified: false
          },
          {
            id: '1004',
            email:'ash@gmail.com',
            role:'user',
            name: 'Donette Foller',
            country: { name: 'Spain', code: 'es' },
            company: 'Printing Dimensions',
            date: '2016-03-04',
            status: 'renewal',
            activity: 90,
            representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            verified: true
          }
        ];
        resolve(customers);
      }, 100);
    });
  }
    getProductsMini() {
        return new Promise<Customer[]>(resolve => {
            const products: Customer[] = [
                {
                        id: '0',
                        fullName: 'امیررضا',
                        phone: '09016812518',
                        email: 'a.ashrafi@gmail.com',
                        avatar: '/hello.world',
                        totalAmount: 40000,
                        status:'موفقیعت امیز',
                },
                {
                        id: '1',
                        fullName: 'امیررضا',
                        phone: '09016812518',
                        email: 'a.ashrafi@gmail.com',
                        avatar: '/hello.world',
                        totalAmount: 40000,
                        status:'موفقیعت امیز',
                },
                {
                        id: '2',
                        fullName: 'امیررضا',
                        phone: '09016812518',
                        email: 'a.ashrafi@gmail.com',
                        avatar: '/hello.world',
                        totalAmount: 40000,
                        status:'موفقیعت امیز',
                },
                {
                        id: '3',
                        fullName: 'امیررضا',
                        phone: '09016812518',
                        email: 'a.ashrafi@gmail.com',
                        avatar: '/hello.world',
                        totalAmount: 40000,
                        status:'موفقیعت امیز',
                },
                {
                        id: '4',
                        fullName: 'امیررضا',
                        phone: '09016812518',
                        email: 'a.ashrafi@gmail.com',
                        avatar: '/hello.world',
                        totalAmount: 40000,
                        status:'موفقیعت امیز',
                },
            ];
            resolve(products);
        });
    }
}