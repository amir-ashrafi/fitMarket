import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {

    getImages(): Promise<any[]> {
        return Promise.resolve([
            {
                itemImageSrc: '/home/0.png',
                thumbnailImageSrc: '/home/0.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '/home/2.png',
                thumbnailImageSrc: '2.png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: '/home/3.png',
                thumbnailImageSrc: '/home/3.png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
           
        ]);
    }
}
