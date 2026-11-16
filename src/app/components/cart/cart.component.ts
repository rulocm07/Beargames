import { Component, inject } from '@angular/core';
import { ShopService } from '../../core/shop.service';

@Component({ selector: 'app-cart', standalone: true, templateUrl: './cart.component.html' })
export class CartComponent {
  readonly shop = inject(ShopService);
  close(): void { this.shop.cartOpen.set(false); }
}
