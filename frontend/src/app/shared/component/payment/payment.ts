import { Component, inject } from '@angular/core';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { Lock } from '@primeicons/angular/lock';
import { Crown } from '@primeicons/angular/crown';
import { ButtonDirective } from "primeng/button";
import { CartService } from '../../../core/services/cart-service';
import { OrderService } from '../../../core/services/order-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [ChevronLeft, Lock, Crown, ButtonDirective],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  private orderService = inject(OrderService);
  private router = inject(Router);

  constructor(public cartService: CartService) {}

  onCheckout(): void {
    if (this.cartService.isEmpty()) {
      return;
    }

    const shippingCost = 200000;
    const totalAmount = this.cartService.totalPrice() + shippingCost;

    const order = this.orderService.placeOrder(
      this.cartService.items(),
      totalAmount,
      {
        fullName: 'کاربر مهمان',
        avatar: 'default-avatar.jpg',
        phone: '',
        email: '',
      }
    );

    this.cartService.clearCart();
    this.router.navigate(['/order-success'], { state: { orderId: order.id } });
  }
}