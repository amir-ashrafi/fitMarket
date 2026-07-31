import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from '../../../../../type';
import { CardProducts } from '../../card-products/card-products';
import { Button } from "primeng/button";
import { MOCK_PRODUCTS } from '../../../data/mock-products';

@Component({
  selector: 'app-new-product',
  imports: [CardProducts, Button],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
  encapsulation: ViewEncapsulation.None,
})
export class NewProduct {
newProducts: Product[] = [...MOCK_PRODUCTS]
}
