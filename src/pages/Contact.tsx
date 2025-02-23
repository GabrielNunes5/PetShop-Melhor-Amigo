import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Entre em Contato</h1>
      <p className="text-xl mb-4">
        Estamos ansiosos para conhecê-lo e ao seu melhor amigo! Visite-nos no  Petshop "Melhor Amigo" e descubra a diferença que fazemos na vida dos animais de estimação. Entre em contato conosco por telefone, e-mail ou através do nosso formulário de contato no nosso site. Seu pet merece o melhor, e nós estamos aqui para fornecer exatamente isso. Confie no Petshop Melhor Amigo para cuidar do seu melhor amigo como se fosse nosso próprio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                Desejo receber novidades e promoções por e-mail
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-between">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Informações de Contato</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                (11) 1234-5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                contato@melhoramigo.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                Rua dos Pets, 123 - São Paulo
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mt-2">
            <h2 className="text-2xl font-semibold mb-2">Horário de Funcionamento</h2>
            <div className="space-y-2">
              <p>Segunda a Sexta: 8h às 19h</p>
              <p>Sábado: 8h às 19h</p>
              <p>Domingo: 8h às 12h</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mt-2">
            <h2 className="text-2xl font-semibold mb-2">Agendamento</h2>
            <p className="mb-2">
              Para agendar um serviço, entre em contato por telefone ou preencha o formulário ao lado. Retornaremos o mais breve possível.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
