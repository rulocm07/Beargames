import { Component, inject, signal } from '@angular/core';
import { ShopService } from '../../core/shop.service';

@Component({ selector: 'app-header', standalone: true, templateUrl: './header.component.html' })
export class HeaderComponent {
  readonly shop = inject(ShopService);
  readonly menuOpen = signal(false);
  updateSearch(event: Event): void {
    this.shop.search.set((event.target as HTMLInputElement).value);
  }
  submitSearch(event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  }
  closeMenu(): void { this.menuOpen.set(false); }
}
