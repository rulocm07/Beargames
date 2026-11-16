import { Component, inject } from '@angular/core';
import { ShopService } from '../../core/shop.service';
import { GameCardComponent } from '../game-card/game-card.component';
@Component({ selector: 'app-catalog', standalone: true, imports: [GameCardComponent], templateUrl: './catalog.component.html' })
export class CatalogComponent { readonly shop = inject(ShopService); readonly genres = ['Todos', 'Aventura', 'Carreras', 'RPG', 'Indie', 'Estrategia', 'Simulación', 'Música']; changeSort(e: Event): void { this.shop.sort.set((e.target as HTMLSelectElement).value); } changePrice(e: Event): void { this.shop.maxPrice.set(Number((e.target as HTMLInputElement).value)); } }
