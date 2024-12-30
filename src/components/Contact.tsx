import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log(formData);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">FALE CONOSCO</h2>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Mensagem</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Send size={20} />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;