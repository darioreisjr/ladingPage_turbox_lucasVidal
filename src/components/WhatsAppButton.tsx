import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PLANS } from '../constants/plans';
import { createWhatsAppUrl } from '../utils/whatsapp';
import type { WhatsAppFormData } from '../types';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<WhatsAppFormData>({
        name: '',
        plan: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedPlan = PLANS.find(p => p.name === formData.plan);
        const message = `Olá! Me chamo ${formData.name} e tenho interesse no ${formData.plan}${selectedPlan ? ` por R$ ${selectedPlan.price}` : ''}`;
        window.open(createWhatsAppUrl(message), '_blank');
        setIsOpen(false);
        setFormData({ name: '', plan: '' });
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
                aria-label="Abrir chat WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl p-6 w-80 z-50">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        aria-label="Fechar chat"
                    >
                        <X size={20} />
                    </button>

                    <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Nome</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Plano de Interesse</label>
                            <select
                                value={formData.plan}
                                onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                                required
                            >
                                <option value="">Selecione um plano</option>
                                {PLANS.map((plan, index) => (
                                    <option key={index} value={plan.name}>
                                        {plan.name} - R$ {plan.price}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            <MessageCircle size={20} />
                            Iniciar Conversa
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default WhatsAppButton;