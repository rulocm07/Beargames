import { Component, inject } from '@angular/core';
import { ShopService } from '../../core/shop.service';
@Component({ selector: 'app-footer', standalone: true, templateUrl: './footer.component.html' })
export class FooterComponent { readonly shop = inject(ShopService); }
