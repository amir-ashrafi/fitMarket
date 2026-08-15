import { Component, OnInit,model} from '@angular/core';
import { PhotoService } from '../../../../core/services/home/photoservice';
import { CarouselModule } from 'primeng/carousel';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';
interface CarouselSlide {
  link: string;
  name: string;
}
@Component({
  selector: 'app-carousel',
  imports:  [CarouselModule, ChevronLeft, ChevronRight],
  providers: [PhotoService],
  templateUrl: './carousel.html',

  styleUrl: './carousel.css',
})
export class CarouselWeb{
  
  items: CarouselSlide[] = [
    { link: '', name: '/home/1.png' },
    { link: '', name: '/home/2.png' },
    { link: '', name: '/home/3.png' },
    { link: '', name: '/home/4.png' },
    { link: '', name: '/home/5.png' },
  ];
}
