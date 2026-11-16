import { Component, inject, signal } from '@angular/core';
import { ShopService } from '../../core/shop.service';
interface ChatMessage { author: 'bot' | 'visitor'; text: string; time: string; }
const welcome = '¡Hola! Soy el asistente de Bear Games. Puedo ayudarte con el catálogo, categorías, precios y carrito. ¿Qué quieres saber?';
@Component({ selector: 'app-chat', standalone: true, templateUrl: './chat.component.html' })
export class ChatComponent {
  readonly shop = inject(ShopService);
  readonly message = signal('');
  readonly messages = signal<ChatMessage[]>([this.newMessage('bot', welcome)]);
  readonly suggestions = ['¿Qué categorías hay?', '¿Cómo funciona el carrito?', '¿Cuánto cuestan los juegos?'];
  private newMessage(author: ChatMessage['author'], text: string): ChatMessage { return { author, text, time: new Intl.DateTimeFormat('es-MX', { hour: '2-digit', minute: '2-digit' }).format(new Date()) }; }
  send(text?: string): void { const input = (text ?? this.message()).trim().slice(0, 500); if (!input) return; this.messages.update(items => [...items, this.newMessage('visitor', input), this.newMessage('bot', this.answer(input))]); this.message.set(''); }
  update(e: Event): void { this.message.set((e.target as HTMLInputElement).value); }
  submit(e: Event): void { e.preventDefault(); this.send(); }
  reset(): void { this.messages.set([this.newMessage('bot', welcome)]); this.message.set(''); }
  private answer(text: string): string {
    const word = text.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (/hola|buenas|saludos/.test(word)) return '¡Hola! Puedes preguntarme por el catálogo, las categorías, los precios o el carrito.';
    if (/precio|cuanto|barato|costo/.test(word)) return 'Cada videojuego tiene un precio fijo en MXN. Puedes consultar todos los importes en la sección Precios.';
    if (/categoria|genero|aventura|carreras|rpg|indie|estrategia|simulacion|musica/.test(word)) return 'Puedes explorar el catálogo por categorías como Aventura, Carreras, RPG, Indie y Simulación.';
    if (/carrito|agregar|comprar|pedido|pagar|pago/.test(word)) return 'Agrega juegos al carrito para ver cantidades y total. También puedes quitar juegos o vaciar tu selección.';
    if (/entrega|codigo|clave|digital|activar/.test(word)) return 'Bear Games reúne videojuegos digitales en un catálogo. En esta página puedes consultar detalles y crear una selección en el carrito.';
    if (/devolucion|reembolso|cancelar/.test(word)) return 'Puedes eliminar artículos de tu carrito en cualquier momento.';
    if (/horario|contacto|ayuda|soporte/.test(word)) return 'Soy un asistente con respuestas automáticas. Puedes preguntarme por las funciones de la tienda.';
    return 'Puedo orientarte sobre el catálogo, las categorías, los precios y el carrito. ¿En qué te ayudo?';
  }
}
