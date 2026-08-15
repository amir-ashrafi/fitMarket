import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../../../type';
import { CardProducts } from '../../card-products/card-products';
import { MOCK_PRODUCTS } from '../../../data/mock-products';
import { AngleLeft } from '@primeicons/angular/angle-left';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-new-product',
  imports: [CardProducts, AngleLeft, RouterLink],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class NewProduct {
newProducts: Product[] = [...MOCK_PRODUCTS]
}
