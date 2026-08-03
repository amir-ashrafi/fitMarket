import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Product } from '../../../../type';
import { Card } from "primeng/card";
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [ButtonModule, ToggleButtonModule, FormsModule, Card],
  templateUrl: './card-products.html',
  encapsulation:ViewEncapsulation.None,
  styleUrl: './card-products.css',
})
export class CardProducts {
@Input() product!: Product;
checked: boolean = false;
@Input() viewType: 'default' | 'compact' = 'default';
constructor(private readonly router: Router) {}

goToDetails(): void {
  if (!this.product?.id) return;
  this.router.navigate(['/products', this.product.id]);
}
}
