import { Component } from '@angular/core';
import { AngleLeft } from '@primeicons/angular/angle-left';
import { PIcon } from '@primeicons/angular/p-icon';
import { ButtonDirective } from "primeng/button";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-links-profile',
  imports: [AngleLeft, PIcon, ButtonDirective, RouterLink],
  templateUrl: './links-profile.html',
  styleUrl: './links-profile.css',
})
export class LinksProfile {
  profile_link = [
    {
      name:'اطاعات شخصی',
      icon:'user',
      link:''
    },
    {
      name:'آدرس های من',
      icon:'map-marker',
      link:''
    },
    {
      name:'روش های پرداخت',
      icon:'credit-card',
      link:''
    },
    {
      name:'اعلان ها',
      icon:'bell',
      link:''
    },
    {
      name:'تنظیمات',
      icon:'wrench',
      link:''
    },
  ];
  helpCart = [
    {
      title:'تماس پشتیبانی',
      text:'۲۴ساعته',
      icon:'headphones'
    },
    {
      title:'سوالات متداول',
      text:'پاسخ به سوالات شما',
      icon:'question',
    }
  ]
}
