import { Component } from '@angular/core';
import { TableCart } from "../../shared/component/table-cart/table-cart";
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
import { Payment } from "../../shared/component/payment/payment";
import { CartService } from '../../core/services/cart-service';
import { Ticket } from '@primeicons/angular/ticket';
import { Percentage } from '@primeicons/angular/percentage';
import { IconField } from "primeng/iconfield";
import { InputText } from "primeng/inputtext";
import { InputIcon } from "primeng/inputicon";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-carts',
  imports: [TableCart, ShoppingCart,FormsModule, Payment, Ticket, Percentage, IconField, InputText, InputIcon],
  templateUrl: './carts.html',
  styleUrl: './carts.css',
})
export class Carts {
constructor(public cartService:CartService){
}
value: string = '';
}
