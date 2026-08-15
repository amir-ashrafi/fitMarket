import { Component,ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from "@angular/router";
interface CategoryCard {
  image: string;
  link: string;
  alt: string;
}

interface CategoryIcon {
  title: string;
  subtitle: string;
  link: string;
  image:string;
}
@Component({
  selector: 'app-banner-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './banner-home.html',
  styleUrl: './banner-home.css',
})
export class BannerHome {
  heroImage = '/assets/hero/main-banner.png';
  heroLink = '/products';

  cards: CategoryCard[] = [
    { image: '/section/3.webp', link: '/category/supplements', alt: 'مکمل‌های ورزشی' },
    { image: '/section/4.webp', link: '/category/equipment', alt: 'تجهیزات ورزشی' },
    { image: '/section/1.jpg', link: '/category/shoes', alt: 'کفش‌های ورزشی' },
    { image: '/section/5.png', link: '/category/equipment', alt: 'تجهیزات ورزشی' },
    { image: '/section/2.webp', link: '/category/apparel', alt: 'لباس ورزشی' },

  ];

  icons: CategoryIcon[] = [
    { title: 'تجهیزات ورزشی', subtitle: 'بدنسازی و تناسب اندام', link: '/category/fitness-equipment' ,image:'/section/66.png'},
    { title: 'تنیس و بدمینتون', subtitle: 'راکت، توپ و لوازم', link: '/category/racket-sports' ,image:'/section/55.png'},
    { title: 'انواع توپ', subtitle: 'انواع توپ', link: '/category/balls' ,image:'/section/44.png' },
    { title: 'ویتامین و مکمل', subtitle: 'ویتامین و مکمل', link: '/category/vitamins',image:'/section/33.png' },
    { title: 'بدنسازی', subtitle: 'دمبل، هالتر و لوازم', link: '/category/bodybuilding',image:'/section/22.png' },
    { title: 'کیف و کوله', subtitle: 'انواع کیف ورزشی', link: '/category/bags',image:'/section/11.png' },
  ];
}
