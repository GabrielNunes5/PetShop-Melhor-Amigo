import { Link } from 'react-router-dom';
import { PawPrint as Paw } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Paw className="h-8 w-8" />
            <span className="font-bold text-xl">Melhor Amigo</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link to="/produtos" className="hover:text-green-200 transition-colors">Produtos</Link>
            <Link to="/galeria" className="hover:text-green-200 transition-colors">Galeria</Link>
            <Link to="/contato" className="hover:text-green-200 transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;