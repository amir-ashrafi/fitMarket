import { computed, effect, Service, signal } from '@angular/core';
import { Product } from '../../../type';

const STORAGE_KEY = 'liked_products';
@Service()
export class LikesService {
    private readonly likedMap = signal<Map<string, Product>>(this.loadFromStorage());
    readonly likedProducts = computed(() =>Array.from(this.likedMap().values()))
    readonly likedCount = computed(() => this.likedMap().size)
    readonly hasLikedProducts = computed(() => this.likedMap().size > 0);

    constructor(){
        effect(() => this.saveToStorage(this.likedMap()))
    }
    isLiked(productId: string): boolean {
        return this.likedMap().has(productId);
    }
    toggleLike(product: Product): void {
        const map = new Map(this.likedMap());
        map.has(product.id) ? map.delete(product.id) : map.set(product.id, product);
        this.likedMap.set(map);
    }
    
    addLike(product: Product): void {
        if (this.isLiked(product.id)) return;
        const map = new Map(this.likedMap());
        map.set(product.id, product);
        this.likedMap.set(map);
    }
    
    removeLike(productId: string): void {
        if (!this.isLiked(productId)) return;
        const map = new Map(this.likedMap());
        map.delete(productId);
        this.likedMap.set(map);
    }
    
    clearAll(): void {
        this.likedMap.set(new Map());
    }
    private loadFromStorage(): Map<string, Product> {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (!raw) return new Map();
          const arr: Product[] = JSON.parse(raw);
          return new Map(arr.map((p) => [p.id, p]));
        } catch {
          return new Map();
        }
      }
      private saveToStorage(map: Map<string, Product>): void {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(map.values())));
        } catch {
          
        }
      }
}
