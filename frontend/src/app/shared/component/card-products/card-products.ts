import { Component, Input, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Product } from '../../../../type';
import { Card } from "primeng/card";
import { Router } from '@angular/router';
import { ToggleButton } from 'primeng/togglebutton';
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
import { Heart } from '@primeicons/angular/heart';
import { HeartFill } from '@primeicons/angular/heart-fill';
import { Clock } from '@primeicons/angular/clock';
@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [ButtonModule, ToggleButtonModule,Clock, ToggleButton, FormsModule, Card, ShoppingCart, HeartFill, Heart],
  templateUrl: './card-products.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-products.css',
})
export class CardProducts implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Input() viewType: 'default' | 'compact' = 'default';
  checked: boolean = false;

  // --- شمارش معکوس تخفیف ---
  timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  isDiscountActive = false;
  discountedPrice: number | null = null;
  private timerId: any;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    if (this.product?.discountPercent && this.product?.price != null) {
      this.discountedPrice =
        this.product.price - (this.product.price * this.product.discountPercent / 100);
    }

    if (this.product?.discountExpiresAt) {
      this.updateCountdown();
      this.timerId = setInterval(() => this.updateCountdown(), 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateCountdown(): void {
    if (!this.product?.discountExpiresAt) return;

    const now = new Date().getTime();
    const distance = new Date(this.product.discountExpiresAt).getTime() - now;

    if (distance <= 0) {
      this.isDiscountActive = false;
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (this.timerId) clearInterval(this.timerId);
      return;
    }

    this.isDiscountActive = true;
    this.timeLeft = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  goToDetails(): void {
    if (!this.product?.id) return;
    this.router.navigate(['/products', this.product.id]);
  }
}