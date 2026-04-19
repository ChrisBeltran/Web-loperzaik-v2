import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCartStore } from '@/store/cartStore';
import { useUserStore } from '@/store/userStore';
import { categorias } from '@/data/productos';
import { CartDrawer } from './CartDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const { usuario, isAuthenticated, logout } = useUserStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-lg'
          : ''
      }`}
      style={{ backgroundColor: '#6B21A8' }}
    >
      {/* Barra superior */}
      <div className="bg-[#581C87] text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden sm:block">
            🚚 Envío GRATIS en Bogotá por compras desde $500.000 | 📞 Línea: 01 8000 123 456
          </p>
          <p className="sm:hidden">🚚 Envío gratis Bogotá +$500k</p>
          <div className="hidden md:flex gap-4">
            <Link to="/ayuda" className="hover:text-purple-200">Ayuda</Link>
            <Link to="/rastreo" className="hover:text-purple-200">Rastrea tu pedido</Link>
            <Link to="/tiendas" className="hover:text-purple-200">Nuestras tiendas</Link>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="font-bold text-xl" style={{ color: '#6B21A8' }}>L</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Loperzaik</h1>
              <p className="text-xs text-purple-200">Tecnología de Vanguardia</p>
            </div>
          </Link>

          {/* Buscador - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Busca laptops, celulares, gaming..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-white/10 border-white/20 text-white placeholder:text-purple-200 focus:bg-white/20 focus:border-white rounded-xl"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-200 hover:text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            {/* Carrito */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-white hover:text-white hover:bg-white/20"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#6B21A8] text-xs font-bold rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg bg-white border-gray-200">
                <CartDrawer onClose={() => setIsCartOpen(false)} />
              </SheetContent>
            </Sheet>

            {/* Usuario */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden sm:flex items-center gap-2 text-white hover:text-white hover:bg-white/20"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="font-semibold text-sm" style={{ color: '#6B21A8' }}>
                        {usuario?.nombre.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="max-w-[100px] truncate">{usuario?.nombre.split(' ')[0]}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border-gray-200">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-gray-900">{usuario?.nombre}</p>
                    <p className="text-xs text-gray-500">{usuario?.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem className="text-gray-700 hover:text-[#6B21A8] hover:bg-purple-50">
                    <User className="w-4 h-4 mr-2" />
                    Mi cuenta
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-700 hover:text-[#6B21A8] hover:bg-purple-50">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Mis pedidos
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="hidden sm:flex items-center gap-2 text-white hover:text-white hover:bg-white/20"
                >
                  <User className="w-5 h-5" />
                  <span>Ingresar</span>
                </Button>
              </Link>
            )}

            {/* Menú móvil */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Buscador - Mobile */}
        <form onSubmit={handleSearch} className="md:hidden mt-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2 bg-white/10 border-white/20 text-white placeholder:text-purple-200 rounded-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-200"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Navegación de categorías - Desktop */}
      <nav className="hidden md:block border-t border-white/20" style={{ backgroundColor: '#581C87' }}>
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1 py-2">
            <li>
              <Link
                to="/"
                className="px-4 py-2 text-sm text-white hover:text-purple-200 transition-colors rounded-lg hover:bg-white/10"
              >
                Inicio
              </Link>
            </li>
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-2 text-sm text-white hover:text-purple-200 transition-colors rounded-lg hover:bg-white/10 flex items-center gap-1">
                      {categoria.nombre}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white border-gray-200">
                    <Link to={`/categoria/${categoria.id}`}>
                      <DropdownMenuItem className="text-[#6B21A8] font-medium hover:bg-purple-50">
                        Ver todo en {categoria.nombre}
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator className="bg-gray-200" />
                    {categoria.subcategorias.map((sub) => (
                      <DropdownMenuItem
                        key={sub}
                        className="text-gray-700 hover:text-[#6B21A8] hover:bg-purple-50"
                      >
                        {sub}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ))}
            <li>
              <Link
                to="/ofertas"
                className="px-4 py-2 text-sm text-yellow-300 hover:text-yellow-200 transition-colors rounded-lg hover:bg-white/10 font-medium"
              >
                🔥 Ofertas
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#581C87] border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-white hover:text-purple-200 hover:bg-white/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              {categorias.map((categoria) => (
                <Link
                  key={categoria.id}
                  to={`/categoria/${categoria.id}`}
                  className="block px-4 py-3 text-white hover:text-purple-200 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {categoria.nombre}
                </Link>
              ))}
              <Link
                to="/ofertas"
                className="block px-4 py-3 text-yellow-300 hover:text-yellow-200 hover:bg-white/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🔥 Ofertas
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="block px-4 py-3 text-white hover:text-purple-200 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ingresar / Registrarse
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
