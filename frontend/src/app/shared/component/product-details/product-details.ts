import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Rating } from 'primeng/rating';
import { TextareaModule } from 'primeng/textarea';
import { Subscription } from 'rxjs';
import { Product, ProductReview } from '../../../../type';
import { MOCK_PRODUCTS } from '../../data/mock-products';
import { CardProducts } from '../card-products/card-products';
import { SelectButton } from "primeng/selectbutton";
import { Dialog } from "primeng/dialog";
import { Paginator, PaginatorState } from "primeng/paginator";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ButtonModule,
    CardProducts,
    Rating,
    TextareaModule,
    Dialog,
    Paginator
],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class ProductDetails implements OnInit, OnDestroy {
  product: Product | undefined;
  recommendedProducts: Product[] = [];
  value_r = 3;
  private routeSub?: Subscription;
  first: number = 0;
  rows: number = 10;
  onPageChange(event: PaginatorState) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? 10;
  }
  example_product = [
    { id: 1, src: '/example/1.jpg' },
    { id: 2, src: '/example/2.jpg' },
    { id: 3, src: '/example/3.jpg' },
  ];
  showFullDescription = false;
  selectedColor?: string;
  selectedWeight = '';
  hoverColor = '';
  selectedSize?: string;

  selectedFlavor = '';
  isFavorite = false;
  isCompared = false;

  trustBadges = [
    { icon: '🚚', title: 'ارسال سریع' },
    { icon: '🔄', title: 'ضمانت بازگشت' },
    { icon: '✅', title: 'ضمانت اصالت کالا' },
    { icon: '🔒', title: 'پرداخت امن' },
  ];
  selectWeight(weight: string) {
    this.selectedWeight = weight;
  }
  get selectedColorName(): string {
    const name = this.product?.color?.find((c) => c.hex === this.selectedColor)?.name;
    return name ?? 'انتخاب نشده';
  }
  get selectedWeightsName(): string {
    return (
      this.product?.weights?.find(w => w.name === this.selectedWeight)?.name ??
      'انتخاب نشده'
    );
  }
  get selectedFlavorName(): string {
    return (
      this.product?.flavors?.find(f => f.name === this.selectedFlavor)?.name ??
      'انتخاب نشده'
    );
  }
    get selectedSizeName(): string {
    return this.availableSizes.find(size => size === this.selectedSize)
      ?? 'انتخاب نشده';
  }
  ratingBreakdown = [
    { stars: 5, percent: 62 },
    { stars: 4, percent: 22 },
    { stars: 3, percent: 10 },
    { stars: 2, percent: 4 },
    { stars: 1, percent: 2 },
  ];

  newReviewRating = 0;
  newReviewComment = '';

  constructor(private readonly route: ActivatedRoute) {}
  likeReview(review: any) {

    if (review.userLiked) {
      review.likes--;
      review.userLiked = false;
      return;
    }
  
    review.likes++;
    review.userLiked = true;
  
    if (review.userDisliked) {
      review.dislikes--;
      review.userDisliked = false;
    }
  }
  
  dislikeReview(review: any) {
  
    if (review.userDisliked) {
      review.dislikes--;
      review.userDisliked = false;
      return;
    }
  
    review.dislikes++;
    review.userDisliked = true;
  
    if (review.userLiked) {
      review.likes--;
      review.userLiked = false;
    }
  }
  get showSizes(): boolean {
    return this.product?.category === 'کفش' || this.product?.category === 'لباس';
  }

  get sizeLabel(): string {
    if (this.product?.category === 'کفش') return 'سایز کفش';
    if (this.product?.category === 'لباس') return 'سایز لباس';
    return 'سایز';
  }

  get availableSizes(): string[] {
    if (this.product?.sizes?.length) {
      return this.product.sizes.map(size => size.name);
    }
  
    if (this.product?.category === 'کفش') {
      return ['40', '41', '42', '43', '44', '45'];
    }
  
    if (this.product?.category === 'لباس') {
      return ['S', 'M', 'L', 'XL', 'XXL'];
    }
  
    return [];
  }

  get showWeights(): boolean {
    return !!this.product?.weights?.length;
  }

  get showFlavors(): boolean {
    return this.product?.category === 'مکمل' && !!this.product?.flavors?.length;
  }

  get overallRating(): number {
    return this.product?.rating ?? this.value_r;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }



  selectFlavor(flavor: string) {
    this.selectedFlavor = flavor;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  addToCart() {
    // later: connect to cart service
  }
  showReviewDialog = false;



  submitReview() {
    if (!this.product || !this.newReviewComment.trim() || this.newReviewRating < 1) return;

    const review: ProductReview = {
      id: `local-${Date.now()}`,
      user: 'شما',
      rating: this.newReviewRating,
      comment: this.newReviewComment.trim(),
      date: new Date().toLocaleDateString('fa-IR'),
      likes:0,
      dislikes:0,
      userDisliked:false,
      userLiked:false,
    };

    this.product.reviews = [review, ...(this.product.reviews ?? [])];
    this.product.reviewCount = (this.product.reviewCount ?? 0) + 1;
    this.newReviewComment = '';
    this.newReviewRating = 0;
    this.showReviewDialog= false;
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      this.product = MOCK_PRODUCTS.find((item) => item.id === productId);
      this.value_r = this.product?.rating ?? 3;
      this.selectedColor = undefined;
      this.selectedSize = undefined;
      this.hoverColor = '';
      this.isFavorite = false;
      this.isCompared = false;
      this.newReviewComment = '';
      this.newReviewRating = 0;
      this.recommendedProducts = this.getRecommendedProducts(productId);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  private getRecommendedProducts(currentId: string | null): Product[] {
    if (!this.product?.category) return [];

    return MOCK_PRODUCTS.filter(
      (item) => item.id !== currentId && item.category === this.product?.category,
    );
  }

}
