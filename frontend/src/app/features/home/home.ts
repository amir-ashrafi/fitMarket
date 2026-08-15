import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CarouselWeb } from "../../shared/component/home/carousel/carousel";
import { ProductFeatures } from "../../shared/component/home/product-features/product-features";
import { Category } from "../../shared/component/home/category/category";
import { NewProduct } from '../../shared/component/home/new-product/new-product';
import { Search_C } from "../../shared/component/search/search";
import { Location } from '@angular/common';
import { BannerHome } from "../../shared/component/home/banner-home/banner-home";
import { Discount } from "../../shared/component/home/discount/discount";
import { Blogs } from '../../shared/component/home/blogs/blogs';

@Component({
  selector: 'app-home',
  imports: [ProductFeatures, Category, NewProduct, CarouselWeb, Search_C, BannerHome, Discount, Blogs],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {
  unreadCount = 5;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  openNotifications() {
    // منطق نوتیف
  }
}
