import { signal, computed, effect, afterNextRender, PLATFORM_ID, inject, Service } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartItem , Customer , Order } from '../../../type';
const ORDERS_STORAGE_KEY = 'orders';

export interface CustomerInfo {
  fullName: string;
  avatar: string;
  phone: string;
  email: string;
}

export interface CustomerInfo {
  fullName: string;
  avatar: string;
  phone: string;
  email: string;
}
@Service()
export class OrderService {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
  
    private readonly ordersList = signal<Customer[]>([]);
    private hydrated = false;
  
    readonly orders = this.ordersList.asReadonly();
    readonly totalOrdersCount = computed(() => this.ordersList().length);
  
    constructor() {
      afterNextRender(() => {
        const saved = this.loadOrdersFromStorage();
        if (saved.length) {
          this.ordersList.set(saved);
        }
        this.hydrated = true;
      });
  
      effect(() => {
        const orders = this.ordersList();
        if (this.isBrowser && this.hydrated) {
          localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
        }
      });
    }
  
    placeOrder(items: CartItem[], totalAmount: number, customer: CustomerInfo): Customer {
      const orderItems: Order[] = items.map((item) => ({
        id: item.id ?? '',
        productName: item.name ?? '',
        productImage: item.image ?? '',
        price: item.price ?? 0,
        quantity: item.quantity ?? 0,
        category: (item as any).category ?? 'نامشخص',
        color: item.selectedColor,
        size: item.selectedSize,
        weight: item.selectedWeight,
        flavor: item.selectedFlavor,
      }));
    
      const newOrder: Customer = {
        id: this.generateOrderId(),
        fullName: customer.fullName,
        avatar: customer.avatar,
        phone: customer.phone,
        email: customer.email,
        purchaseDate: this.formatDate(new Date()),
        status: 'در انتظار بررسی',
        totalAmount,
        orders: orderItems,
      };
    
      this.ordersList.update((orders) => [newOrder, ...orders]);
      return newOrder;
    }
  
    updateOrderStatus(orderId: string, status: string): void {
      this.ordersList.update((orders) =>
        orders.map((o) => (o.id === orderId ? { ...o, status } : o))
      );
    }
  
    private generateOrderId(): string {
      const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
      return `ORD-${Date.now().toString(36).toUpperCase()}-${rand}`;
    }
  
    private formatDate(date: Date): string {
      return date.toISOString().split('T')[0];
    }
  
    private loadOrdersFromStorage(): Customer[] {
      if (!this.isBrowser) return [];
      try {
        const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
      } catch (error) {
        console.error('خطا در خواندن سفارش‌ها از localStorage:', error);
        return [];
      }
    }
}
