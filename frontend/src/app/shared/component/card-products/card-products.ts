import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleButton } from 'primeng/togglebutton';
import { Card } from 'primeng/card';
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
import { Heart } from '@primeicons/angular/heart';
import { HeartFill } from '@primeicons/angular/heart-fill';
import { Clock } from '@primeicons/angular/clock';
import { DiscountInfo, Product } from '../../../../type';
import { DiscountService } from '../../../core/services/discount-service';
import { Subscription } from 'rxjs';
import { LikesService } from '../../../core/services/likes-service';

@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [
    ButtonModule,
    ToggleButton,
    FormsModule,
    Card,
    ShoppingCart,
    Heart,
    HeartFill,
    Clock,
  ],
  templateUrl: './card-products.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './card-products.css',
})
export class CardProducts implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Input() viewType: 'default' | 'compact' = 'default';

  private readonly router = inject(Router);
  private readonly discountService = inject(DiscountService);
  private readonly likesService = inject(LikesService);

  // وضعیت لایک بودن این محصول، به صورت reactive
  liked = computed(() =>
    this.product ? this.likesService.isLiked(this.product.id) : false
  );

  private timerId: ReturnType<typeof setInterval> | undefined;
  discountInfo: DiscountInfo | null = null;
  private discountSub?: Subscription;

  ngOnInit(): void {
    if (this.product) {
      this.discountSub = this.discountService
        .getCountdown$(this.product)
        .subscribe(() => {
          this.discountInfo = this.discountService.getDiscountInfo(this.product);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.discountSub?.unsubscribe();
  }

  toggleLike(event?: Event): void {
    event?.stopPropagation(); // جلوگیری از رفتن به صفحه‌ی جزئیات هنگام کلیک روی قلب
    if (this.product) {
      this.likesService.toggleLike(this.product);
    }
  }

  goToDetails(): void {
    if (!this.product?.id) return;
    this.router.navigate(['/product-detail', this.product.id]);
  }

}