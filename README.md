# Bear Games — PIA de Programación Web

Tienda de videojuegos digitales desarrollada con **Angular 20, TypeScript, HTML y CSS**. Diseño verde y blanco inspirado en FIME.

## Ejecutar en VS Code

1. Abre esta carpeta (la que contiene `package.json`).
2. Ejecuta `npm install`.
3. Ejecuta `npm start`.
4. Abre `http://localhost:4200/` si no se abre automáticamente.

## Estructura

- `src/app/components/`: inicio, catálogo, detalle, carrito, precios, nosotros, chat, encabezado y pie.
- `src/app/core/games.ts`: catálogo y precios editables.
- `src/app/core/shop.service.ts`: búsqueda, filtros por categoría, carrito y estado compartido.
- `src/styles.css`: estilos globales y diseño adaptable.
- `public/juegos/`: portadas SVG provisionales.

## Sustituir juegos ficticios por reales

1. Copia la portada (JPG, PNG o WebP) dentro de `public/juegos/`.
2. Abre `src/app/core/games.ts` y edita `name`, `genre`, `description`, `price` y `cover`.
3. Para una imagen `mi-juego.jpg`, escribe `cover: '/juegos/mi-juego.jpg'`.
4. Conservar el campo `id` de un juego existente mantiene su relación con el carrito.
5. Revisa los derechos de uso de las imágenes que incluyas y cita sus fuentes en el reporte.
6. `public/catalogo.json` es una copia informativa; los datos activos se leen de `games.ts`.

## Funcionalidades

- Navegación a Inicio, Catálogo, Precios y Nosotros.
- Filtro de categoría, precio máximo, orden y búsqueda.
- Tarjetas con imagen, nombre, categoría, descripción, precio fijo y botón para añadir al carrito.
- Carrito con cantidades, eliminación y total; persistencia mediante `localStorage`.
- Asistente de chat de respuestas automáticas.
- Diseño responsive para escritorio y móvil.

**Alcance técnico:** el carrito organiza artículos y calcula el total, pero no incluye pasarela de pago ni procesamiento de pedidos. La interfaz no muestra avisos académicos, conforme al diseño solicitado.
