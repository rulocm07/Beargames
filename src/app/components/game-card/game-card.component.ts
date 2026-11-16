import { Component, inject, input } from '@angular/core';
import { Game } from '../../core/games';
import { ShopService } from '../../core/shop.service';

@Component({ selector: 'app-game-card', standalone: true, templateUrl: './game-card.component.html' })
export class GameCardComponent {
  readonly game = input.required<Game>();
  readonly shop = inject(ShopService);
}
