import { Shield } from 'lucide-react';
import type { Plan, Feature, FAQ } from '../types/index.ts';

export const WHATSAPP_NUMBER = '5511930474470';
export const WHATSAPP_BASE_URL = 'https://wa.me';

export const PLANS: Plan[] = [
    {
        name: 'PLANO MENSAL',
        price: '35,00',
        period: 'mês',
        features: [
            '1 Tela',
            '+80.000 Conteúdo',
            'Qualidade HD/SD',
            'Guia de Programação [EPG]',
            'Assista no Smartphone/Tablet',
            'Assista na Smart TV',
            'Assista no TV Box/Chromecast',
            'Programação Adultos [Opcional]',
            'Rádios Online',
            'Cortesias: Pacote Filmes e Séries'
        ],
        image: 'IptvB01.png'
    },
    // Add other plans...
];

export const FEATURES: Feature[] = [
    {
        icon: Shield,
        title: 'Proteção',
        description: 'Estamos sempre atentos as novas tecnologias de proteção para prestarmos o melhor produto.'
    },
    // Add other features...
];

export const FAQS: FAQ[] = [
    {
        question: 'O QUE É ?',
        answer: 'É um novo método de transmissão de sinais televisivos. Assim como o VOIP (Voz sobre IP), usa o protocolo IP Internet Protocol como meio de transporte do conteúdo.'
    },
    // Add other FAQs...
];