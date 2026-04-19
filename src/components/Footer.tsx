import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#6B21A8' }} className="text-white">
      {/* Beneficios */}
      <div className="border-t border-white/20" style={{ backgroundColor: '#581C87' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Envío Gratis</h4>
                <p className="text-xs text-purple-200">En Bogotá desde $500k</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Garantía Real</h4>
                <p className="text-xs text-purple-200">1 año en todos los productos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Devoluciones</h4>
                <p className="text-xs text-purple-200">30 días sin preguntas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Pago Seguro</h4>
                <p className="text-xs text-purple-200">Múltiples métodos de pago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="font-bold text-2xl" style={{ color: '#6B21A8' }}>L</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Loperzaik</h2>
                <p className="text-sm text-purple-200">Tecnología de Vanguardia</p>
              </div>
            </Link>
            <p className="text-purple-100 text-sm mb-6 max-w-sm">
              Tu tienda de tecnología en Colombia. Laptops, celulares, gaming y más con los mejores precios y garantía real.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">Suscríbete a nuestro newsletter</h4>
              <p className="text-xs text-purple-200 mb-3">Recibe ofertas exclusivas y novedades</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-purple-300"
                />
                <Button className="bg-white text-[#6B21A8] hover:bg-purple-100 shrink-0">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#6B21A8] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#6B21A8] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#6B21A8] transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-[#6B21A8] transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/laptops" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/categoria/smartphones" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/categoria/audio" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Audio
                </Link>
              </li>
              <li>
                <Link to="/categoria/gaming" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Gaming
                </Link>
              </li>
              <li>
                <Link to="/categoria/monitores" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Monitores
                </Link>
              </li>
              <li>
                <Link to="/categoria/componentes" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Componentes PC
                </Link>
              </li>
            </ul>
          </div>

          {/* Atención al cliente */}
          <div>
            <h4 className="font-semibold text-white mb-4">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ayuda" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link to="/rastreo" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Rastrea tu Pedido
                </Link>
              </li>
              <li>
                <Link to="/devoluciones" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link to="/garantia" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Garantía
                </Link>
              </li>
              <li>
                <Link to="/preguntas" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-purple-200 hover:text-white text-sm transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
                <span className="text-purple-200 text-sm">
                  Carrera 15 # 85-50, Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-300 shrink-0" />
                <span className="text-purple-200 text-sm">
                  01 8000 123 456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-300 shrink-0" />
                <span className="text-purple-200 text-sm">
                  info@loperzaik.com
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-medium text-white text-sm mb-2">Horario de Atención</h5>
              <p className="text-purple-200 text-sm">
                Lunes a Viernes: 8am - 7pm
              </p>
              <p className="text-purple-200 text-sm">
                Sábados: 9am - 5pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Métodos de pago */}
      <div className="border-t border-white/20" style={{ backgroundColor: '#581C87' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-purple-200 text-sm">
              © 2026 Loperzaik. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-purple-200 text-sm">Métodos de pago:</span>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-white">VS</div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-white">MC</div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-white">AM</div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-white">PP</div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-white">NE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
