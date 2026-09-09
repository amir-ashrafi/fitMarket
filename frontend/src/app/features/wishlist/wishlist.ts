import { Component, inject } from '@angular/core';
import { CardProducts } from "../../shared/component/card-products/card-products";
import { LikesService } from '../../core/services/likes-service';
import { Heart } from '@primeicons/angular/heart';
@Component({
  selector: 'app-wishlist',
  imports: [CardProducts,Heart],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  private readonly likesService = inject(LikesService);
  likedProducts = this.likesService.likedProducts; // computed signal
  likedCount = this.likesService.likedCount;
  isLiked = this.likesService.hasLikedProducts();
}
