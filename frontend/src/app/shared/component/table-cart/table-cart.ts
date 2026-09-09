import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart-service';
import { CommonModule } from '@angular/common';
import { Bind } from "primeng/bind";
import { ButtonDirective } from "primeng/button";
import { RouterLink } from "@angular/router";
import { Times } from '@primeicons/angular/times';
import { Minus } from '@primeicons/angular/minus';
import { Plus } from '@primeicons/angular/plus';
import { InputNumber, InputNumberModule } from "primeng/inputnumber";
import { FormsModule } from '@angular/forms';
import { Trash } from '@primeicons/angular/trash';
import { CartPlus } from '@primeicons/angular/cart-plus';
@Component({
  selector: 'app-table-cart',
  imports: [CommonModule,InputNumberModule,Trash,CartPlus, FormsModule, Bind, Times, ButtonDirective, RouterLink, Minus, Plus, InputNumber],
  templateUrl: './table-cart.html',
  styleUrl: './table-cart.css',
})
export class TableCart {
  constructor(public cartService: CartService) {console.log('[TableCart] constructed');}
  value1: number = 50;

}
