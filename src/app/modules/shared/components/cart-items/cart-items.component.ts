import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
    @Input() showButton :any;

    updateCartItem(num:Number) {
      console.log("num",num);
    }
    removeCartItem() {
      console.log("remove item");
    }
}
