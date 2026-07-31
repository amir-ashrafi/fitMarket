import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  FilterProducts,
  ProductFilters,
} from '../../shared/component/products/filter-products/filter-products';
import { CardProducts } from "../../shared/component/card-products/card-products";
import { Product } from '../../../type';
import { MOCK_PRODUCTS } from '../../shared/data/mock-products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule, FilterProducts, CardProducts],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  filter_button_info = [
    { id: 0, name: 'مرتبط ترین', sort: 'relevant' },
    { id: 1, name: 'جدید ترین', sort: 'newest' },
    { id: 2, name: 'گران ترین', sort: 'price_desc' },
    { id: 3, name: 'ارزان ترین', sort: 'price_asc' },
    { id: 4, name: 'پروفروش ترین', sort: 'best_seller' },
    { id: 5, name: 'بیشترین تخفیف', sort: 'best_discount' },
  ];
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
}
