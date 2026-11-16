import { Component, inject } from '@angular/core';
import { ShopService } from '../../core/shop.service';

@Component({ selector: 'app-home', standalone: true, templateUrl: './home.component.html' })
export class HomeComponent {
  readonly shop = inject(ShopService);
  readonly genres = ['Aventura', 'Carreras', 'RPG', 'Indie', 'Estrategia', 'Simulación'];
}
