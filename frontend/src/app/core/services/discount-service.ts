import { Service } from '@angular/core';
import { DiscountCountdown, DiscountInfo, Product } from '../../../type';
import { interval, map, Observable, startWith, takeWhile } from 'rxjs';

@Service()
export class DiscountService {
    getDiscountedPrice(product: Product): number | null {
        if (!product?.discountPercent || product.price == null) return null;
        return product.price - (product.price * product.discountPercent) / 100;
      }
    
      isDiscountActive(product: Product): boolean {
        if (!product?.discountExpiresAt) return false;
        return new Date(product.discountExpiresAt).getTime() - Date.now() > 0;
      }
    
      getCountdown(product: Product): DiscountCountdown | null {
        if (!product?.discountExpiresAt) return null;
    
        const distance = new Date(product.discountExpiresAt).getTime() - Date.now();
        if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }
    
      getDiscountInfo(product: Product): DiscountInfo {
        return {
          isActive: this.isDiscountActive(product),
          discountPrise: this.getDiscountedPrice(product),
          countdown: this.getCountdown(product),
        };
      }
    
      getCountdown$(product: Product): Observable<DiscountCountdown | null> {
        return interval(1000).pipe(
          startWith(0),
          map(() => this.getCountdown(product)),
          takeWhile((c) => !!c && c.days + c.hours + c.minutes + c.seconds > 0, true),
        );
      }
}
