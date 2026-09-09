import { Component } from '@angular/core';
import { Wallet } from '@primeicons/angular/wallet';
import { Ticket } from '@primeicons/angular/ticket';
import { Heart } from '@primeicons/angular/heart';
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
@Component({
  selector: 'app-card-profile',
  imports: [Wallet,Ticket,Heart,ShoppingCart],
  templateUrl: './card-profile.html',
  styleUrl: './card-profile.css',
})
export class CardProfile {

}
