import { Injectable, signal, computed, effect, afterNextRender, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartItem, Product } from '../../../type';

const CART_STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly cartItems = signal<CartItem[]>([]);
  private hydrated = false;

  readonly items = this.cartItems.asReadonly();

  readonly totalItemsCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  readonly isEmpty = computed(() => this.cartItems().length === 0);

  constructor() {
    console.log('[CartService] constructor, isBrowser:', this.isBrowser);
  
    afterNextRender(() => {
      const saved = this.loadCartFromStorage();
      console.log('[CartService] afterNextRender loaded:', saved.length, 'items');
      if (saved.length) {
        this.cartItems.set(saved);
      }
      this.hydrated = true;
    });
  
    effect(() => {
      const items = this.cartItems();
      console.log('[CartService] effect fired, hydrated:', this.hydrated, 'count:', items.length);
      if (this.isBrowser && this.hydrated) {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      }
    });
  }

  private buildCartItemId(
    productId: string | number,
    options?: { color?: string; size?: string; weight?: string; flavor?: string }
  ): string {
    const parts = [productId, options?.color, options?.size, options?.weight, options?.flavor]
      .filter(Boolean);
    return parts.join('-');
  }

  addToCart(
    product: Product,
    quantity: number = 1,
    options?: { color?: string; size?: string; weight?: string; flavor?: string }
  ): void {
    const itemId = this.buildCartItemId(product.id, options);

    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.id === itemId);

      if (existingItem) {
        return items.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newItem: CartItem = {
        id: itemId,
        productId: String(product.id),
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        selectedColor: options?.color,
        selectedSize: options?.size,
        selectedWeight: options?.weight,
        selectedFlavor: options?.flavor,
      };
      return [...items, newItem];
    });
  }

  /** حذف کامل یک آیتم از سبد خرید (itemId ترکیبی، نه صرفاً productId) */
  removeFromCart(itemId: string): void {
    this.cartItems.update((items) =>
      items.filter((item) => item.id !== itemId)
    );
  }

  /** افزایش تعداد یک آیتم (دکمه +) */
  increaseQuantity(itemId: string): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  /** کاهش تعداد یک آیتم؛ اگر به صفر برسد خودش حذف می‌شود (دکمه -) */
  decreaseQuantity(itemId: string): void {
    this.cartItems.update((items) =>
      items
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  /** تنظیم مستقیم تعداد (مثلا از یک input عددی) */
  setQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }
    this.cartItems.update((items) =>
      items.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  }

  /** چک کردن اینکه این آیتم دقیق (با همین گزینه‌ها) از قبل در سبد هست یا نه */
  isInCart(itemId: string): boolean {
    return this.cartItems().some((item) => item.id === itemId);
  }

  /** خالی کردن کامل سبد خرید */
  clearCart(): void {
    this.cartItems.set([]);
    if (this.isBrowser) {
      localStorage.removeItem(CART_STORAGE_KEY);
    }
  }

  /** خواندن سبد ذخیره‌شده از localStorage */
  private loadCartFromStorage(): CartItem[] {
    if (!this.isBrowser) {
      return [];
    }
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('خطا در خواندن سبد خرید از localStorage:', error);
      return [];
    }
  }
}