import type { Producto, Categoria, Review } from '@/types';

// ============================================
// CATEGORÍAS DE PRODUCTOS
// ============================================
// Aquí defines las categorías de tu tienda
// Puedes agregar, editar o eliminar categorías

export const categorias: Categoria[] = [
  {
    id: 'laptops',
    nombre: 'Laptops',
    icono: 'Laptop',
    imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    subcategorias: ['Gaming', 'Ultrabooks', 'Profesionales', '2 en 1'],
  },
  {
    id: 'smartphones',
    nombre: 'Smartphones',
    icono: 'Smartphone',
    imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
    subcategorias: ['Flagship', 'Gama Media', 'Gama Baja', 'Plegables'],
  },
  {
    id: 'audio',
    nombre: 'Audio',
    icono: 'Headphones',
    imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    subcategorias: ['Audífonos', 'Parlantes', 'Soundbars', 'Micrófonos'],
  },
  {
    id: 'gaming',
    nombre: 'Gaming',
    icono: 'Gamepad2',
    imagen: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
    subcategorias: ['Consolas', 'Accesorios', 'Sillas', 'Teclados & Mouse'],
  },
  {
    id: 'monitores',
    nombre: 'Monitores',
    icono: 'Monitor',
    imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    subcategorias: ['4K', 'Gaming 144Hz', 'Ultrawide', 'Curvos'],
  },
  {
    id: 'componentes',
    nombre: 'Componentes PC',
    icono: 'Cpu',
    imagen: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600',
    subcategorias: ['Procesadores', 'Tarjetas Gráficas', 'RAM', 'SSD'],
  },
];

// ============================================
// CATÁLOGO DE PRODUCTOS
// ============================================
// Aquí agregas tus productos
// Copia el template de abajo y modifica los valores

/*
TEMPLATE PARA AGREGAR UN PRODUCTO NUEVO:

{
  id: 'xx-xxx',                    // ID único (ej: lp-004, sp-005)
  nombre: 'Nombre del Producto',   // Nombre completo
  descripcion: 'Descripción...',   // Descripción corta
  precio: 2999000,                 // Precio en pesos colombianos (sin decimales)
  precioAnterior: 3499000,         // Precio anterior si hay descuento (opcional)
  imagen: 'URL_IMAGEN_PRINCIPAL',  // URL de la imagen principal
  imagenes: [                      // URLs de imágenes adicionales
    'URL_IMAGEN_1',
    'URL_IMAGEN_2'
  ],
  categoria: 'laptops',            // ID de la categoría (debe existir arriba)
  subcategoria: 'Gaming',          // Subcategoría
  marca: 'Marca',                  // Marca del producto
  stock: 10,                       // Cantidad disponible
  rating: 4.8,                     // Calificación (1-5)
  reviews: 100,                    // Número de reviews
  etiquetas: ['Nuevo', 'Oferta'],  // Etiquetas: 'Nuevo', 'Destacado', 'Oferta'
  especificaciones: {              // Especificaciones técnicas
    'Procesador': 'Intel i7',
    'RAM': '16GB',
    'Almacenamiento': '512GB SSD',
  },
  destacado: true,                 // true = aparece en "Destacados"
  oferta: true,                    // true = aparece en "Ofertas"
},

PARA OBTENER IMÁGENES GRATIS:
- Unsplash: https://unsplash.com (busca el producto y copia la URL de la imagen)
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

EJEMPLO DE URL DE UNSPLASH:
https://images.unsplash.com/photo-XXXXXXXXXXXX?w=600
*/

export const productos: Producto[] = [
  // ============================================
  // LAPTOPS
  // ============================================
  {
    id: 'lp-001',
    nombre: 'MacBook Pro 16" M3 Max',
    descripcion: 'La laptop más potente de Apple con chip M3 Max, 36GB RAM y 1TB SSD. Pantalla Liquid Retina XDR de 16.2 pulgadas.',
    precio: 15499000,
    precioAnterior: 16999000,
    imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600',
    ],
    categoria: 'laptops',
    subcategoria: 'Profesionales',
    marca: 'Apple',
    stock: 15,
    rating: 4.9,
    reviews: 328,
    etiquetas: ['Nuevo', 'Destacado', 'Profesional'],
    especificaciones: {
      'Procesador': 'Apple M3 Max',
      'RAM': '36GB Unified Memory',
      'Almacenamiento': '1TB SSD',
      'Pantalla': '16.2" Liquid Retina XDR',
      'Batería': 'Hasta 22 horas',
    },
    destacado: true,
    oferta: true,
  },
  {
    id: 'lp-002',
    nombre: 'ASUS ROG Zephyrus G14',
    descripcion: 'Laptop gaming compacta con RTX 4070, Ryzen 9 8945HS, 32GB RAM. Pantalla OLED 120Hz 3K.',
    precio: 8999000,
    precioAnterior: 9999000,
    imagen: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600',
    ],
    categoria: 'laptops',
    subcategoria: 'Gaming',
    marca: 'ASUS',
    stock: 8,
    rating: 4.7,
    reviews: 156,
    etiquetas: ['Gaming', 'Oferta'],
    especificaciones: {
      'Procesador': 'AMD Ryzen 9 8945HS',
      'GPU': 'NVIDIA RTX 4070 8GB',
      'RAM': '32GB DDR5',
      'Almacenamiento': '1TB NVMe SSD',
      'Pantalla': '14" OLED 3K 120Hz',
    },
    destacado: true,
    oferta: true,
  },
  {
    id: 'lp-003',
    nombre: 'Dell XPS 15 9530',
    descripcion: 'Laptop premium con Intel Core i9-13900H, RTX 4070, 32GB RAM. Pantalla InfinityEdge OLED.',
    precio: 11299000,
    imagen: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=600',
    ],
    categoria: 'laptops',
    subcategoria: 'Profesionales',
    marca: 'Dell',
    stock: 12,
    rating: 4.6,
    reviews: 89,
    etiquetas: ['Profesional'],
    especificaciones: {
      'Procesador': 'Intel Core i9-13900H',
      'GPU': 'NVIDIA RTX 4070',
      'RAM': '32GB DDR5',
      'Almacenamiento': '1TB SSD',
      'Pantalla': '15.6" OLED 3.5K',
    },
    destacado: false,
    oferta: false,
  },

  // ============================================
  // SMARTPHONES
  // ============================================
  {
    id: 'sp-001',
    nombre: 'iPhone 16 Pro Max 256GB',
    descripcion: 'El iPhone más avanzado con chip A18 Pro, cámara de 48MP con control de cámara, y pantalla Super Retina XDR de 6.9".',
    precio: 6999000,
    precioAnterior: 7499000,
    imagen: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600',
    ],
    categoria: 'smartphones',
    subcategoria: 'Flagship',
    marca: 'Apple',
    stock: 25,
    rating: 4.8,
    reviews: 512,
    etiquetas: ['Nuevo', 'Destacado'],
    especificaciones: {
      'Pantalla': '6.9" Super Retina XDR',
      'Procesador': 'A18 Pro',
      'Cámara Principal': '48MP Fusion',
      'Cámara Ultra Gran Angular': '48MP',
      'Batería': 'Hasta 33 horas',
    },
    destacado: true,
    oferta: true,
  },
  {
    id: 'sp-002',
    nombre: 'Samsung Galaxy S24 Ultra 512GB',
    descripcion: 'Galaxy AI integrado, S Pen, cámara de 200MP, y pantalla QHD+ de 6.8". El más potente de Samsung.',
    precio: 6499000,
    precioAnterior: 6999000,
    imagen: 'https://images.unsplash.com/photo-1610945265078-3858a0828671?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1610945265078-3858a0828671?w=600',
    ],
    categoria: 'smartphones',
    subcategoria: 'Flagship',
    marca: 'Samsung',
    stock: 20,
    rating: 4.7,
    reviews: 423,
    etiquetas: ['AI', 'Destacado', 'Oferta'],
    especificaciones: {
      'Pantalla': '6.8" QHD+ AMOLED 120Hz',
      'Procesador': 'Snapdragon 8 Gen 3',
      'Cámara Principal': '200MP',
      'RAM': '12GB',
      'Batería': '5000mAh',
    },
    destacado: true,
    oferta: true,
  },
  {
    id: 'sp-003',
    nombre: 'Google Pixel 9 Pro XL 256GB',
    descripcion: 'La mejor experiencia Android con Gemini AI, cámara computational avanzada, y actualizaciones garantizadas.',
    precio: 5499000,
    imagen: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    ],
    categoria: 'smartphones',
    subcategoria: 'Flagship',
    marca: 'Google',
    stock: 10,
    rating: 4.6,
    reviews: 234,
    etiquetas: ['AI', 'Android Puro'],
    especificaciones: {
      'Pantalla': '6.8" LTPO OLED 120Hz',
      'Procesador': 'Google Tensor G4',
      'Cámara Principal': '50MP',
      'RAM': '16GB',
      'Batería': '5050mAh',
    },
    destacado: false,
    oferta: false,
  },

  // ============================================
  // AUDIO
  // ============================================
  {
    id: 'au-001',
    nombre: 'Sony WH-1000XM5',
    descripcion: 'Los mejores audífonos con cancelación de ruido del mundo. 30 horas de batería y sonido Hi-Res.',
    precio: 1699000,
    precioAnterior: 1999000,
    imagen: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600',
    ],
    categoria: 'audio',
    subcategoria: 'Audífonos',
    marca: 'Sony',
    stock: 30,
    rating: 4.8,
    reviews: 892,
    etiquetas: ['Cancelación de Ruido', 'Oferta'],
    especificaciones: {
      'Tipo': 'Over-ear Inalámbricos',
      'Cancelación': 'ANC Industry Leading',
      'Batería': '30 horas',
      'Carga Rápida': '3 min = 3 horas',
      'Códec': 'LDAC, AAC, SBC',
    },
    destacado: true,
    oferta: true,
  },
  {
    id: 'au-002',
    nombre: 'AirPods Pro 2 USB-C',
    descripcion: 'Cancelación de ruido adaptativa, audio espacial personalizado, y chip H2. Con estuche MagSafe USB-C.',
    precio: 1299000,
    imagen: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600',
    ],
    categoria: 'audio',
    subcategoria: 'Audífonos',
    marca: 'Apple',
    stock: 40,
    rating: 4.7,
    reviews: 1234,
    etiquetas: ['Popular'],
    especificaciones: {
      'Tipo': 'In-ear Inalámbricos',
      'Cancelación': 'ANC Adaptativa',
      'Batería': '6h + 30h estuche',
      'Resistencia': 'IP54',
      'Chip': 'H2',
    },
    destacado: true,
    oferta: false,
  },

  // ============================================
  // GAMING
  // ============================================
  {
    id: 'gm-001',
    nombre: 'PlayStation 5 Slim',
    descripcion: 'La nueva PS5 más delgada con 1TB SSD. Incluye un DualSense. Experiencia gaming de próxima generación.',
    precio: 2799000,
    precioAnterior: 2999000,
    imagen: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600',
    ],
    categoria: 'gaming',
    subcategoria: 'Consolas',
    marca: 'Sony',
    stock: 18,
    rating: 4.9,
    reviews: 2341,
    etiquetas: ['Consola', 'Oferta'],
    especificaciones: {
      'Almacenamiento': '1TB SSD',
      'GPU': 'AMD RDNA 2',
      'Resolución': 'Hasta 4K 120fps',
      'Ray Tracing': 'Sí',
      'Incluye': '1 DualSense',
    },
    destacado: true,
    oferta: true,
  },
  {
    id: 'gm-002',
    nombre: 'Nintendo Switch OLED',
    descripcion: 'La consola híbrida con pantalla OLED de 7 pulgadas. Juega en casa o en cualquier lugar.',
    precio: 1799000,
    imagen: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600',
    ],
    categoria: 'gaming',
    subcategoria: 'Consolas',
    marca: 'Nintendo',
    stock: 22,
    rating: 4.7,
    reviews: 1876,
    etiquetas: ['Portátil'],
    especificaciones: {
      'Pantalla': '7" OLED 1280x720',
      'Almacenamiento': '64GB + microSD',
      'Batería': '4.5-9 horas',
      'Salida TV': 'Hasta 1080p',
      'Audio': 'Altavoces mejorados',
    },
    destacado: false,
    oferta: false,
  },

  // ============================================
  // MONITORES
  // ============================================
  {
    id: 'mn-001',
    nombre: 'LG UltraGear 27" 4K 144Hz',
    descripcion: 'Monitor gaming 4K con 144Hz, 1ms, HDR600, y NVIDIA G-SYNC. La experiencia definitiva.',
    precio: 3299000,
    precioAnterior: 3799000,
    imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    ],
    categoria: 'monitores',
    subcategoria: '4K',
    marca: 'LG',
    stock: 14,
    rating: 4.6,
    reviews: 156,
    etiquetas: ['Gaming', '4K', 'Oferta'],
    especificaciones: {
      'Pantalla': '27" IPS 4K UHD',
      'Tasa Refresco': '144Hz',
      'Tiempo Respuesta': '1ms GtG',
      'HDR': 'DisplayHDR 600',
      'Sync': 'G-SYNC Compatible',
    },
    destacado: true,
    oferta: true,
  },

  // ============================================
  // COMPONENTES PC
  // ============================================
  {
    id: 'cp-001',
    nombre: 'NVIDIA RTX 4090 24GB',
    descripcion: 'La GPU más potente del mundo para gaming y creación de contenido. Ray tracing y DLSS 3.5.',
    precio: 8499000,
    precioAnterior: 9999000,
    imagen: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600',
    imagenes: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600',
    ],
    categoria: 'componentes',
    subcategoria: 'Tarjetas Gráficas',
    marca: 'NVIDIA',
    stock: 5,
    rating: 4.9,
    reviews: 89,
    etiquetas: ['Gaming', 'Oferta'],
    especificaciones: {
      'GPU': 'AD102',
      'VRAM': '24GB GDDR6X',
      'Núcleos CUDA': '16384',
      'TDP': '450W',
      'Conectores': '3x DisplayPort 1.4a, 1x HDMI 2.1',
    },
    destacado: true,
    oferta: true,
  },

  // ============================================
  // AGREGA TUS PRODUCTOS AQUÍ
  // ============================================
  // Copia el template de arriba y pégalo aquí
  // Luego modifica los valores

];

// ============================================
// REVIEWS DE CLIENTES
// ============================================

export const reviews: Review[] = [
  {
    id: 'rv-001',
    usuario: 'Carlos Martínez',
    avatar: 'https://i.pravatar.cc/150?u=carlos',
    rating: 5,
    comentario: 'Excelente producto, llegó en perfecto estado y el envío fue rapidísimo. Totalmente recomendado.',
    fecha: '2026-03-15',
    util: 24,
  },
  {
    id: 'rv-002',
    usuario: 'María González',
    avatar: 'https://i.pravatar.cc/150?u=maria',
    rating: 5,
    comentario: 'La mejor tienda de tecnología en Colombia. Precios competitivos y atención al cliente excepcional.',
    fecha: '2026-03-10',
    util: 18,
  },
  {
    id: 'rv-003',
    usuario: 'Andrés López',
    avatar: 'https://i.pravatar.cc/150?u=andres',
    rating: 4,
    comentario: 'Muy buen producto, aunque el empaque podría mejorar. El producto funciona perfecto.',
    fecha: '2026-03-08',
    util: 12,
  },
];

// ============================================
// FUNCIONES AUXILIARES (NO MODIFICAR)
// ============================================

export const getProductosDestacados = () => productos.filter((p) => p.destacado);
export const getProductosOferta = () => productos.filter((p) => p.oferta);
export const getProductosByCategoria = (categoriaId: string) =>
  productos.filter((p) => p.categoria === categoriaId);
export const getProductoById = (id: string) => productos.find((p) => p.id === id);
