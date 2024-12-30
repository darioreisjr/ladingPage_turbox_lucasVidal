import { Check, ShoppingCart } from 'lucide-react';
import { PLANS } from '../constants/plans';
import { createWhatsAppUrl } from '../utils/whatsapp';

const Plans = () => {
  const handleSubscribe = (plan: string, price: string) => {
    const message = `Olá! Gostaria de assinar o ${plan} por R$ ${price}`;
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="plans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">CONHEÇA NOSSOS PLANOS</h2>
          <p className="text-lg text-gray-300">
            Faça parte dessa familia hoje mesmo. Planos sem fidelidade de forma pré-paga,
            sem surpresas e de maneira simples e facil de assinar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS.map((plan, index) => (
            <div 
              key={index}
              className="bg-white/10 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-around h-80 overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.name}
                  className="h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">{plan.name}</h3>
                <div className="text-3xl font-bold text-orange-500 mb-6 text-center">
                  R$ {plan.price}
                  <span className="text-sm text-gray-400">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={20} className="text-orange-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleSubscribe(plan.name, plan.price)}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 py-3 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <ShoppingCart size={20} />
                  ASSINE JÁ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;