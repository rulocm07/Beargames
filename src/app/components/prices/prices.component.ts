import { Component, inject } from '@angular/core';
import { ShopService } from '../../core/shop.service';
@Component({ selector: 'app-prices', standalone: true, templateUrl: './prices.component.html' })
export class PricesComponent { readonly shop = inject(ShopService); readonly games = this.shop.games; }
