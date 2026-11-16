import { Component, inject } from '@angular/core';
import { ShopService } from './core/shop.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PricesComponent } from './components/prices/prices.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailComponent } from './components/detail/detail.component';

@Component({
  selector: 'app-root', standalone: true,
  imports: [HeaderComponent, HomeComponent, CatalogComponent, PricesComponent, AboutComponent, FooterComponent, ChatComponent, CartComponent, DetailComponent],
  template: `
    <app-header />
    <main id="contenido">
      <app-home />
      <app-catalog />
      <app-prices />
      <app-about />
    </main>
    <app-footer />
    <app-chat />
    <app-cart />
    <app-detail />
    @if (shop.notice()) { <div class="toast" role="status">{{ shop.notice() }}</div> }
  `
})
export class AppComponent { readonly shop = inject(ShopService); }
