import React from 'react';
import { Shield, CreditCard, Headphones, Server, Smartphone, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Proteção',
    description: 'Estamos sempre atentos as novas tecnologias de proteção para prestarmos o melhor produto.'
  },
  {
    icon: CreditCard,
    title: 'Diversas Formas de Pagamento',
    description: 'Várias formas de pagamento para você escolher. Cartão, Pix, boleto e outros métodos de pagamentos digitais.'
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Equipe pronta para lhe atender. Suporte técnico via WhatsApp e Chat ao Vivo.'
  },
  {
    icon: Server,
    title: 'Servidores de Qualidade',
    description: 'Nós possuímos os melhores servidores para que você tenha uma programação de qualidade.'
  },
  {
    icon: Smartphone,
    title: 'Assista em Qualquer Lugar a Qualquer Hora',
    description: 'Assista a qualquer hora e em qualquer lugar aos seus programas favoritos pelo celular.'
  },
  {
    icon: DollarSign,
    title: 'Preço Justo e Acessível a Todos',
    description: 'Preço justo e acessível a todos sem taxas, multas ou fidelidades, podendo ser cancelado a qualquer momento.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          VOCÊ SÓ ENCONTRA AQUI NO <span className="text-orange-500">TURBOX</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;