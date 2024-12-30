import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'O QUE É ?',
    answer: 'É um novo método de transmissão de sinais televisivos. Assim como o VOIP (Voz sobre IP), usa o protocolo IP Internet Protocol como meio de transporte do conteúdo.'
  },
  {
    question: 'POSSO TESTAR ANTES DE ASSINAR ?',
    answer: 'Sim. Disponibilizamos um teste grátis de 2 horas, justamente para você poder conhecer todos os nossos canais, filmes e séries e também para você ver como irá rodar na sua internet. Veja nossos tutoriais antes de solicitar seu teste.'
  },
  {
    question: 'COMO FUNCIONA O PAGAMENTO ?',
    answer: 'Possuímos planos mensais, onde você pode renovar livremente. Assim como também possuímos planos mais longos como os anuais com grandes descontos, o poder de escolha é seu.'
  },
  {
    question: 'COMO FUNCIONA AS RENOVAÇÕES ?',
    answer: 'Nossas assinaturas não possuem taxas, multas ou fidelidades, podendo ser cancelado a qualquer momento.'
  },
  {
    question: 'POSSO ASSISTIR EM MAIS DE UMA TELA ?',
    answer: 'Você pode configurar seu login em diversos dispositivos, porém não poderá ver simultâneamente em duas telas sem adquirir o ponto extra. Adquira o ponto extra para ver em mais de uma tela ao mesmo tempo.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-100" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          DÚVIDAS FREQUENTES
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-orange-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;