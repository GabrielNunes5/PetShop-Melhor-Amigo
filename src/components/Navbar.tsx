import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint as Paw, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Paw className="h-8 w-8" />
            <span className="font-bold text-xl">Melhor Amigo</span>
          </Link>

          {/* Menu para desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link to="/produtos" className="hover:text-green-200 transition-colors">Produtos</Link>
            <Link to="/galeria" className="hover:text-green-200 transition-colors">Galeria</Link>
            <Link to="/contato" className="hover:text-green-200 transition-colors">Contato</Link>
          </div>

          {/* Botão do menu hamburger para mobile */}
          <button
            ref={buttonRef}
            className="md:hidden p-4 rounded-md hover:text-green-200 hover:bg-green-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden absolute top-16 left-0 right-0 bg-green-600 z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/produtos"
                className="block px-3 py-2 rounded-md hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                to="/galeria"
                className="block px-3 py-2 rounded-md hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link
                to="/contato"
                className="block px-3 py-2 rounded-md hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;