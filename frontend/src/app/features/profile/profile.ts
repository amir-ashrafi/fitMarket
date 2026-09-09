import { Component } from '@angular/core';
import { Heart } from '@primeicons/angular/heart';
import { Bell } from '@primeicons/angular/bell';
import { Title } from "../../shared/component/profile/title/title";
import { CardProfile } from "../../shared/component/profile/card-profile/card-profile";
import { LinksProfile } from "../../shared/component/profile/links-profile/links-profile";
import { OrdersUser } from "../../shared/component/profile/orders/orders";
import { EnformationUser } from "../../shared/component/profile/enformation-user/enformation-user";
@Component({
  selector: 'app-profile',
  imports: [Heart, Bell, Title, CardProfile, LinksProfile, OrdersUser, EnformationUser],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
