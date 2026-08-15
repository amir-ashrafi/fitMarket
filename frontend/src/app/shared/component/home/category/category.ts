import { Component, OnInit, signal, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../../../../core/services/data-chart/products';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CATEGORY } from '../../../../../type';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [Carousel, ButtonModule, RouterLink],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './category.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // Eager وجود نداره، اصلاح شد
  styleUrl: './category.css',
})
export class Category implements OnInit {
  category = signal<CATEGORY[]>([]);
  responsiveOptions: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCategorySmall().then(data => {
      const minItemsForCircular = 24;
      let finalData = [...data];
      while (data.length > 0 && finalData.length < minItemsForCircular) {
        finalData = [...finalData, ...data];
      }
      this.category.set(finalData);
    });

    this.responsiveOptions = [
      { breakpoint: '1600px', numVisible: 6, numScroll: 1 },
      { breakpoint: '1200px', numVisible: 6, numScroll: 1 },
      { breakpoint: '1024px', numVisible: 5, numScroll: 1 },
      { breakpoint: '768px',  numVisible: 2, numScroll: 1 },
      { breakpoint: '560px',  numVisible: 1, numScroll: 1 },
    ];
  }
}