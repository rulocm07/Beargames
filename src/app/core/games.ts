// Catálogo editable: reemplaza cover con una ruta en public/juegos/ para usar portadas reales.
export type Genre = 'Carreras' | 'Aventura' | 'Indie' | 'RPG' | 'Simulación' | 'Estrategia' | 'Música';
export interface Game { id: string; name: string; genre: Genre; price: number; featured: boolean; cover: string; description: string; }
export const GAMES: Game[] = [
  {
    "id": "assettoCorsa",
    "name": "Assetto Corsa",
    "genre": "Carreras",
    "price": 289,
    "featured": true,
    "cover": "/juegos/assetocorsa.jpg",
    "description": "Assetto Corsa cuenta con un avanzado motor gráfico DirectX 11 que recrea un entorno inmersivo, con condiciones de luz dinámicas y superficies y materiales realistas."
  },
  {
    "id": "stellarBlade",
    "name": "Stellar Blade",
    "genre": "Aventura",
    "price": 399,
    "featured": true,
    "cover": "/juegos/stellarblade.jpg",
    "description": "Disfruta de combates feroces y una historia intrigante mientras resuelves los misterios que llevaron a la caída de la Tierra."
  },
  {
    "id": "peak",
    "name": "Peak",
    "genre": "Indie",
    "price": 199,
    "featured": true,
    "cover": "/juegos/peak.jpg",
    "description": "PEAK es un juego cooperativo de escalada en el que un solo error puede ser fatal."
  },
  {
    "id": "persona3",
    "name": "Persona 3 Reload",
    "genre": "RPG",
    "price": 549,
    "featured": true,
    "cover": "/juegos/persona3.jpg",
    "description": "Persona 3 Reload es la fascinante nueva versión del RPG que definió el género y que ahora renace para la era moderna con gráficos y una jugabilidad de última generación."
  },
  {
    "id": "borderlands2",
    "name": "Borderlands 2",
    "genre": "Aventura",
    "price": 259,
    "featured": true,
    "cover": "/juegos/borderlands.jpg",
    "description": "Una nueva era de disparos y saqueos está a punto de comenzar. Juega como uno de los cuatro nuevos buscadores de la Cámara y enfréntate a legiones de nuevas criaturas, psicópatas y al villano que las controla, Jack el Guapo."
  },
  {
    "id": "needforspeed",
    "name": "Need for Speed",
    "genre": "Carreras",
    "price": 349,
    "featured": true,
    "cover": "/juegos/Needforspeed.jpg",
    "description": "Un juego de carreras callejeras dinámico donde los límites de la ley se desvanecen cuando empieza a anochecer."
  },
  {
    "id": "monsterhunterwilds",
    "name": "Monster Hunter Wilds",
    "genre": "Aventura",
    "price": 169,
    "featured": false,
    "cover": "/juegos/Monsterhunterwilds.jpg",
    "description": "Siente la fuerza desbocada, salvaje e imparable de la naturaleza en entornos que se transforman drásticamente de un momento a otro."
  },
  {
    "id": "gta6",
    "name": "Grand Theft Auto 6",
    "genre": "Simulación",
    "price": 429,
    "featured": false,
    "cover": "/juegos/GTA6.jpg",
    "description": "Grand Theft Auto VI es un próximo videojuego de acción y aventura desarrollado y publicado por Rockstar Games. Será el octavo juego principal de la serie Grand Theft Auto."
  },
  {
    "id": "tabs",
    "name": "Totally Accurate Battle Simulator",
    "genre": "Estrategia",
    "price": 129,
    "featured": false,
    "cover": "/juegos/tabs.jpg",
    "description": "Sé el líder de los tambaleantes de tierras antiguas, lugares espeluznantes y mundos de fantasía."
  },
  {
    "id": "geometrydash",
    "name": "Geometry Dash",
    "genre": "Música",
    "price": 239,
    "featured": false,
    "cover": "/juegos/geometrydash.jpg",
    "description": "¡Salta y vuela a través del peligro en este juego de plataformas de acción basado en el ritmo!"
  },
  {
    "id": "minecraft",
    "name": "Minecraft",
    "genre": "Simulación",
    "price": 299,
    "featured": false,
    "cover": "/juegos/minecraft.jpg",
    "description": "Para las aventuras arriesgadas, nada gana a las criaturas peligrosas que luchan, a la exploración de paisajes vertiginosos y a la creación del camino a la victoria en el modo Survival."
  },
  {
    "id": "thebindingofisaac",
    "name": "The Binding of Isaac",
    "genre": "Indie",
    "price": 89,
    "featured": false,
    "cover": "/juegos/thebindingofisaac.jpg",
    "description": "The Binding of Isaac es un juego de rol de acción generado aleatoriamente con elementos pesados similares a los de Roguelike."
  }
];
