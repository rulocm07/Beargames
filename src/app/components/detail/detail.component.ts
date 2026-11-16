import { Component, inject } from '@angular/core';
import { ShopService } from '../../core/shop.service';
@Component({ selector: 'app-detail', standalone: true, templateUrl: './detail.component.html' })
export class DetailComponent { readonly shop = inject(ShopService); }
