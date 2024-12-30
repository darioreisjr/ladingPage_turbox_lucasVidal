import React from 'react';
import { Link } from 'react-scroll';
import { X } from 'lucide-react';
import { NavItem } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 lg:hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white hover:text-orange-500 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={onClose}
              className="text-2xl text-white hover:text-orange-500 transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
          
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;