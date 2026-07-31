import { Component, OnInit, ViewEncapsulation, model } from '@angular/core';
import { PhotoService } from '../../../../core/services/home/photoservice';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-carousel',
  imports: [GalleriaModule],
  providers: [PhotoService],
  templateUrl: './carousel.html',
  encapsulation:ViewEncapsulation.None,
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit{
images = model<any[]>([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images:any) => this.images.set(images));
    }
}
