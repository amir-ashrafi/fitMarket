import { Component } from '@angular/core';
import { CardProducts } from "../../card-products/card-products";
import { Product } from '../../../../../type';
import { MOCK_PRODUCTS } from '../../../data/mock-products';
import { AngleLeft } from '@primeicons/angular/angle-left';

@Component({
  selector: 'app-discount',
  imports: [CardProducts,AngleLeft],
  templateUrl: './discount.html',
  styleUrl: './discount.css',
})
export class Discount {
  newProducts: Product[] = [...MOCK_PRODUCTS]

}
