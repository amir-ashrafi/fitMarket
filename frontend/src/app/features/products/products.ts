import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import {
  FilterProducts,
  ProductFilters,
} from '../../shared/component/products/filter-products/filter-products';
import { CardProducts } from "../../shared/component/card-products/card-products";
import { Product } from '../../../type';
import { MOCK_PRODUCTS } from '../../shared/data/mock-products';
import { BreakpointObserver } from '@angular/cdk/layout';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Search_C } from "../../shared/component/search/search";
import { WindowMaximize } from '@primeicons/angular/window-maximize';
import { PIcon } from "@primeicons/angular/p-icon";
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule, FilterProducts, CardProducts, DrawerModule, InputGroupModule, InputGroupAddonModule, ButtonModule, InputTextModule, Search_C,DrawerModule, ButtonModule, WindowMaximize,PIcon],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  
  icons = ['sliders-v', 'sort-alt'];
  filter_button_info = [
    { id: 0, name: 'مرتبط ترین', sort: 'relevant' },
    { id: 1, name: 'جدید ترین', sort: 'newest' },
    { id: 2, name: 'گران ترین', sort: 'price_desc' },
    { id: 3, name: 'ارزان ترین', sort: 'price_asc' },
    { id: 4, name: 'پروفروش ترین', sort: 'best_seller' },
    { id: 5, name: 'بیشترین تخفیف', sort: 'best_discount' },
  ];
  visible: boolean = false;
  
  isMobile = false;
  visibleLeft: boolean = false;
  visibleRight: boolean = false;
  visibleTop: boolean = false;
  visibleBottom: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,private location: Location) {}
  
  ngOnInit() {
    this.breakpointObserver
      .observe('(max-width: 640px)')
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }
  newProducts: Product[] = [...MOCK_PRODUCTS];
  selectedSortId = 0;
  selectedSort = 'relevant';
  activeFilters: ProductFilters | null = null;

  selectSort(item: { id: number; sort: string }) {
    this.selectedSortId = item.id;
    this.selectedSort = item.sort;
  }

  onFiltersChange(filters: ProductFilters) {
    this.activeFilters = filters;
  }

  goBack() {
    this.location.back();
  }
}
