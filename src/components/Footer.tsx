import React from 'react';
import { Phone, Mail, MapPin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Baixe nosso APP</h3>
            <div className="space-y-3">
              <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors w-full">
                <Download size={20} />
                Android
              </button>
              <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors w-full">
                <Download size={20} />
                Apple
              </button>
              <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors w-full">
                <Download size={20} />
                PC
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5511930474470" className="flex items-center gap-2 hover:text-orange-500">
                <Phone size={20} />
                (11) 93047-4470
              </a>
              <a href="mailto:contato@turbox.com" className="flex items-center gap-2 hover:text-orange-500">
                <Mail size={20} />
                contato@turbox.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                São Paulo, SP
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Formas de Pagamento</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Add payment method icons here */}
              <div className="bg-white/10 p-2 rounded-lg"></div>
              <div className="bg-white/10 p-2 rounded-lg"></div>
              <div className="bg-white/10 p-2 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2024 TURBOX. Todos os direitos reservados.</p>
          <div className="mt-2 text-sm text-gray-400">
            SITE SEGURO 100% PROTEGIDO
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;