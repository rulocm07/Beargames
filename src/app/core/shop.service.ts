import { Injectable, computed, effect, signal } from '@angular/core';
import { Game, GAMES } from './games';

export interface CartLine { id: string; quantity: number; }
export interface CartEntry { game: Game; quantity: number; }
const CART_KEY = 'bear_games_cart_v1';

function loadSavedCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((line): line is CartLine =>
      typeof line === 'object' && line !== null &&
      typeof line.id === 'string' && GAMES.some(game => game.id === line.id) &&
      Number.isInteger(line.quantity) && line.quantity >= 1 && line.quantity <= 20
    );
  } catch { return []; }
}

@Injectable({ providedIn: 'root' })
export class ShopService {
  readonly games = GAMES;
  readonly search = signal('');
  readonly genre = signal('Todos');
  readonly sort = signal('featured');
  readonly maxPrice = signal(700);

  readonly cart = signal<CartLine[]>(loadSavedCart());
  readonly cartOpen = signal(false);
  readonly chatOpen = signal(false);
  readonly detail = signal<Game | null>(null);
  readonly notice = signal('');
  readonly orderMessage = signal('');

  readonly cartEntries = computed<CartEntry[]>(() => this.cart()
    .map(line => ({ game: this.games.find(game => game.id === line.id), quantity: line.quantity }))
    .filter((entry): entry is CartEntry => !!entry.game));
  readonly cartCount = computed(() => this.cartEntries().reduce((acc, item) => acc + item.quantity, 0));
  readonly total = computed(() => this.cartEntries().reduce((acc, item) => acc + item.game.price * item.quantity, 0));

  readonly filteredGames = computed(() => {
    const needle = this.search().trim().toLocaleLowerCase('es');
    const genre = this.genre();
    const maxPrice = this.maxPrice();
    const result = this.games.filter(game =>
      (genre === 'Todos' || game.genre === genre) &&
      game.price <= maxPrice &&
      (!needle || [game.name, game.genre, game.description].join(' ').toLocaleLowerCase('es').includes(needle))
    );
    if (this.sort() === 'low') result.sort((a, b) => a.price - b.price);
    if (this.sort() === 'high') result.sort((a, b) => b.price - a.price);
    if (this.sort() === 'name') result.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    return result;
  });

  private noticeTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    effect(() => {
      try { localStorage.setItem(CART_KEY, JSON.stringify(this.cart())); }
      catch { /* Permite funcionar incluso si el navegador bloquea el almacenamiento. */ }
    });
  }

  money(price: number): string {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(price);
  }

  add(game: Game): void {
    const current = this.cart();
    const existing = current.find(line => line.id === game.id);
    if (existing) {
      if (existing.quantity >= 20) { this.notify('Máximo 20 unidades por juego.'); return; }
      this.cart.set(current.map(line => line.id === game.id ? { ...line, quantity: line.quantity + 1 } : line));
    } else {
      this.cart.set([...current, { id: game.id, quantity: 1 }]);
    }
    this.orderMessage.set('');
    this.notify(`${game.name} agregado al carrito.`);
  }

  changeQuantity(id: string, delta: number): void {
    this.cart.set(this.cart()
      .map(line => line.id === id ? { ...line, quantity: Math.min(20, Math.max(0, line.quantity + delta)) } : line)
      .filter(line => line.quantity > 0));
    this.orderMessage.set('');
  }

  remove(id: string): void {
    this.cart.set(this.cart().filter(line => line.id !== id));
    this.orderMessage.set('');
  }

  clearCart(): void { this.cart.set([]); this.orderMessage.set(''); this.notify('Carrito vaciado.'); }

  clearFilters(): void {
    this.search.set(''); this.genre.set('Todos'); 
    this.sort.set('featured'); this.maxPrice.set(700);
  }

  viewGenre(genre: string): void {
    this.clearFilters();
    this.genre.set(genre);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  notify(message: string): void {
    this.notice.set(message);
    if (this.noticeTimer) clearTimeout(this.noticeTimer);
    this.noticeTimer = setTimeout(() => this.notice.set(''), 3300);
  }
}
