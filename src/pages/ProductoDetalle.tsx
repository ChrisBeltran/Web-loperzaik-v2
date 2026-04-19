import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw, 
  Check, ChevronRight, Minus, Plus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { getProductoById, productos } from '@/data/productos';
import { useCartStore } from '@/store/cartStore';
import type { Producto } from '@/types';

export function ProductoDetalle() {
  const { id } = useParams<{ id: string }>();
  const producto = getProductoById(id || '');
  const [cantidad, setCantidad] = useState(1);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
  
  const addToCart = useCartStore((state) => state.addToCart);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!producto) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link to="/">
            <Button className="bg-[#6B21A8] hover:bg-[#581C87]">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const descuento = producto.precioAnterior
    ? Math.round(((producto.precioAnterior - producto.precio) / producto.precioAnterior) * 100)
    : 0;

  const productosRelacionados = productos
    .filter((p) => p.categoria === producto.categoria && p.id !== producto.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    toast.success(`${producto.nombre} agregado al carrito`);
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4 md:mb-6 overflow-x-auto">
          <Link to="/" className="hover:text-[#6B21A8] whitespace-nowrap">Inicio</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link to={`/categoria/${producto.categoria}`} className="hover:text-[#6B21A8] capitalize whitespace-nowrap">
            {producto.categoria}
          </Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <span className="text-gray-700 truncate">{producto.nombre}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Galería de imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
              <img
                src={producto.imagenes[imagenSeleccionada] || producto.imagen}
                alt={producto.nombre}
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-col gap-1 md:gap-2">
                {producto.oferta && (
                  <Badge className="bg-red-500 text-white text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1">
                    -{descuento}% OFF
                  </Badge>
                )}
                {producto.etiquetas.includes('Nuevo') && (
                  <Badge className="bg-[#6B21A8] text-white text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1">
                    Nuevo
                  </Badge>
                )}
              </div>

              {/* Botones de acción */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 flex flex-col gap-1 md:gap-2">
                <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm">
                  <Heart className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-[#6B21A8] transition-colors shadow-sm">
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {producto.imagenes.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {producto.imagenes.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImagenSeleccionada(index)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      imagenSeleccionada === index
                        ? 'border-[#6B21A8]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Información del producto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
              <span className="text-sm text-gray-500">{producto.marca}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-gray-900 font-medium">{producto.rating}</span>
                <span className="text-gray-500 text-sm">({producto.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {producto.nombre}
            </h1>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4 md:mb-6">
              {producto.descripcion}
            </p>

            {/* Precio */}
            <div className="flex items-end gap-2 md:gap-4 mb-4 md:mb-6">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6B21A8]">
                {formatPrice(producto.precio)}
              </span>
              {producto.precioAnterior && (
                <span className="text-lg md:text-xl text-gray-400 line-through">
                  {formatPrice(producto.precioAnterior)}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${producto.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={producto.stock > 0 ? 'text-green-600 text-sm md:text-base' : 'text-red-600 text-sm md:text-base'}>
                {producto.stock > 0 ? `En stock (${producto.stock} disponibles)` : 'Agotado'}
              </span>
            </div>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
              {producto.etiquetas.map((etiqueta) => (
                <Badge key={etiqueta} variant="outline" className="border-gray-300 text-gray-600 text-xs md:text-sm">
                  {etiqueta}
                </Badge>
              ))}
            </div>

            {/* Cantidad y botones */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center bg-gray-100 rounded-xl p-1 w-fit">
                <button
                  onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Minus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <span className="w-12 md:w-16 text-center text-gray-900 text-lg md:text-xl font-semibold">
                  {cantidad}
                </span>
                <button
                  onClick={() => setCantidad(Math.min(producto.stock, cantidad + 1))}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              <Button
                size="lg"
                className="flex-1 bg-[#6B21A8] hover:bg-[#581C87] text-base md:text-lg font-semibold"
                onClick={handleAddToCart}
                disabled={producto.stock === 0}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Agregar al carrito
              </Button>
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
                <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#6B21A8]" />
                <div>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">Envío Gratis</p>
                  <p className="text-gray-500 text-xs">Bogotá desde $500k</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#6B21A8]" />
                <div>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">Garantía 1 Año</p>
                  <p className="text-gray-500 text-xs">Directo con marca</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
                <RotateCcw className="w-5 h-5 md:w-6 md:h-6 text-[#6B21A8]" />
                <div>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">Devolución 30 días</p>
                  <p className="text-gray-500 text-xs">Sin preguntas</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-[#6B21A8]" />
                <div>
                  <p className="text-gray-900 font-medium text-xs md:text-sm">Producto Original</p>
                  <p className="text-gray-500 text-xs">100% garantizado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs de información */}
        <Tabs defaultValue="especificaciones" className="mb-12 md:mb-16">
          <TabsList className="bg-gray-100 border-b border-gray-200 w-full justify-start rounded-none p-0 overflow-x-auto">
            <TabsTrigger
              value="especificaciones"
              className="data-[state=active]:bg-white data-[state=active]:text-[#6B21A8] rounded-none px-4 md:px-6 py-2 md:py-3 text-sm md:text-base whitespace-nowrap"
            >
              Especificaciones
            </TabsTrigger>
            <TabsTrigger
              value="descripcion"
              className="data-[state=active]:bg-white data-[state=active]:text-[#6B21A8] rounded-none px-4 md:px-6 py-2 md:py-3 text-sm md:text-base whitespace-nowrap"
            >
              Descripción
            </TabsTrigger>
            <TabsTrigger
              value="envio"
              className="data-[state=active]:bg-white data-[state=active]:text-[#6B21A8] rounded-none px-4 md:px-6 py-2 md:py-3 text-sm md:text-base whitespace-nowrap"
            >
              Envío
            </TabsTrigger>
          </TabsList>

          <TabsContent value="especificaciones" className="mt-4 md:mt-6">
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Especificaciones técnicas</h3>
              <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                {Object.entries(producto.especificaciones).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 md:py-3 border-b border-gray-200">
                    <span className="text-gray-500 text-sm md:text-base">{key}</span>
                    <span className="text-gray-900 font-medium text-sm md:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="descripcion" className="mt-4 md:mt-6">
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Descripción del producto</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {producto.descripcion}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3 md:mt-4">
                Este producto cuenta con garantía oficial del fabricante y está disponible para envío inmediato 
                a todo Colombia. Todos nuestros productos son 100% originales y nuevos.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="envio" className="mt-4 md:mt-6">
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Información de envío</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6B21A8]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4 md:w-5 md:h-5 text-[#6B21A8]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm md:text-base">Envío estándar</h4>
                    <p className="text-gray-500 text-xs md:text-sm">3-5 días hábiles. Gratis en Bogotá por compras desde $500.000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6B21A8]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-[#6B21A8]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium text-sm md:text-base">Envío express</h4>
                    <p className="text-gray-500 text-xs md:text-sm">1-2 días hábiles. Costo adicional según destino.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Productos relacionados */}
        {productosRelacionados.length > 0 && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              {productosRelacionados.map((p) => (
                <ProductoRelacionadoCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente ProductoRelacionadoCard para productos relacionados
function ProductoRelacionadoCard({ producto }: { producto: Producto }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/producto/${producto.id}`}>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-[#6B21A8] hover:shadow-lg transition-all">
        <div className="relative">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform"
          />
          {producto.oferta && (
            <Badge className="absolute top-2 left-2 bg-red-500">Oferta</Badge>
          )}
        </div>
        <div className="p-3 md:p-4">
          <h3 className="font-medium text-gray-900 text-sm md:text-base line-clamp-2 mb-1 md:mb-2 group-hover:text-[#6B21A8] transition-colors">
            {producto.nombre}
          </h3>
          <p className="text-base md:text-lg font-bold text-[#6B21A8]">{formatPrice(producto.precio)}</p>
        </div>
      </div>
    </Link>
  );
}
