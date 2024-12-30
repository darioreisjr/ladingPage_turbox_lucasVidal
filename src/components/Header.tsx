import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants/navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 text-white z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <img src='/Logo.png' className='w-40' alt='Logo '/>
        
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a 
          href="https://wa.me/5511930474470"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          <Phone size={20} />
          <span>Fale Conosco</span>
        </a>

        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-white hover:text-orange-500 transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </header>
  );
};

export default Header;