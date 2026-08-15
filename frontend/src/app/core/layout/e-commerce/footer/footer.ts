import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Items_Footer } from '../../../../../type';
import { RouterLink } from '@angular/router';
import {  ButtonModule } from "primeng/button";
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FloatLabel, FloatLabelModule } from "primeng/floatlabel";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [RouterLink, ButtonModule, FloatLabel,  InputTextModule,
    FloatLabelModule,
    FormsModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.css',
})
export class Footer {
  email = '';
footer_items:Items_Footer[]=[
  {
    id:0,
    name:'دسترسی سریع',
  children:[
    {
      id:0,
      name:'صفحه اصلی',
      link:''
    },
    {
      id:1,
      name:'محصولات',
      link:''
    },
    {
      id:2,
      name:'درباره ما',
      link:''
    },
    {
      id:3,
      name:'تماس باما',
      link:''
    },
  ]
  },
  {
    id:1,
    name:'دسته بندی',
  children:[
    {
      id:0,
      name:'تجهیزات ورزشی',
      link:''
    },
    {
      id:1,
      name:'مکمل ها',
      link:''
    },
    {
      id:2,
      name:'برنامه های تمرینی',
      link:''
    },
    {
      id:3,
      name:'تغذیه ورزشی',
      link:''
    },
  ]
  },
  {
    id:2,
    name:'تماس با ما',
  children:[
    {
      id:0,
      name:'نشانی:تهران خیابان ولیعصر',
      link:''
    },
    {
      id:1,
      name:'ایمیل:ashrfya628@gmail.com',
      link:''
    },
    {
      id:2,
      name:'تلفن:09016812518',
      link:''
    },
  ]
  }
  
]
icon=[
  {
    id:0,
    name:'pi pi-instagram',
    link:''
  },
  {
    id:1,
    name:'pi pi-whatsapp',
    link:''
  },
  {
    id:2,
    name:'pi pi-facebook',
    link:''
  },
  {
    id:3,
    name:'pi pi-telegram',
    link:''
  },
  {
    id:4,
    name:'pi pi-twitter',
    link:''
  },
]
value1: string | undefined;
value2: string | undefined;
value3: string | undefined;
items: any[] | undefined;
search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
}
