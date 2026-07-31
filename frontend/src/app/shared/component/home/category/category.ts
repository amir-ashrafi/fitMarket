import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../../core/services/data-chart/products';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CATEGORY } from '../../../../../type';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-category',
  standalone:true,
 imports: [Carousel, ButtonModule, RouterLink],
    providers: [ProductService],
    encapsulation:ViewEncapsulation.None,
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit{
  category = signal<CATEGORY[]>([]);

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
    this.productService.getCategorySmall().then(data => {
      const finalData = data.length <= 6 ? [...data, ...data] : data;
      // مقداردهی به سیگنال
      this.category.set(finalData);
    });

this.responsiveOptions = [
    {
    breakpoint: '1600px',
    numVisible: 5,
    numScroll: 1
  },
  {
    breakpoint: '1200px',
    numVisible: 5,
    numScroll: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
];

    }



}
