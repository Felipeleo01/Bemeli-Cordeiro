import React from 'react';
import { Button } from './Button';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl">Vamos agendar seu <br/><span className="text-rose-300 italic">momento?</span></h2>
            <p className="text-stone-400 font-light text-lg">
              Entre em contato para avaliar suas necessidades e construir o protocolo ideal para você. Sua autoestima merece esse cuidado.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 rounded-full text-rose-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Localização</h4>
                  <p className="text-stone-400 font-light">Av. Paulista, 1000 - Sala 42<br/>Bela Vista, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-stone-800 rounded-full text-rose-300">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Instagram</h4>
                  <a href="#" className="text-stone-400 font-light hover:text-white transition-colors">@bemelicordeiro_estetica</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-stone-800 rounded-full text-rose-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Whatsapp</h4>
                  <p className="text-stone-400 font-light">(11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-stone-900 shadow-2xl">
            <h3 className="font-serif text-2xl mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Nome Completo</label>
                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-rose-400 transition-colors" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Email ou Whatsapp</label>
                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-rose-400 transition-colors" placeholder="Contato" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-600 mb-1">Interesse</label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 focus:outline-none focus:border-rose-400 transition-colors">
                  <option>Harmonização Facial</option>
                  <option>Botox</option>
                  <option>Bioestimuladores</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="pt-4">
                <Button className="w-full justify-center">
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};