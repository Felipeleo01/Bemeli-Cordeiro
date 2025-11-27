import React from 'react';
import { CheckCircle2 } from 'lucide-react';

// --- CONFIGURAÇÃO DA IMAGEM ---
// Link fornecido pelo usuário.
const BEMELI_IMAGE_URL = 'https://i.ibb.co/d47nSsRr/Imagem-do-Whats-App-de-2025-11-27-s-11-46-55-08e49a02.jpg';
// ------------------------------

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img 
                src={BEMELI_IMAGE_URL} 
                alt="Bemeli Cordeiro" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.warn("Falha ao carregar imagem principal.");
                  target.onerror = null; 
                  // Fallback visual caso a URL expire ou falhe
                  target.src = "https://picsum.photos/id/64/600/800"; 
                }}
              />
            </div>
            {/* Outline box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-rose-200 rounded-2xl -z-0"></div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
              Sobre <span className="text-rose-400 italic">Bemeli</span>
            </h2>
            
            <div className="space-y-6 text-stone-600 font-sans leading-relaxed text-lg">
              <p>
                Olá! Sou Bemeli Cordeiro, <strong className="text-stone-900">Pós-Graduada em Estética Avançada</strong> e uma verdadeira entusiasta da beleza natural. Minha jornada não é apenas sobre procedimentos, mas sobre devolver a confiança que às vezes perdemos na correria do dia a dia.
              </p>
              <p>
                Me considero "viciada em autocuidados" porque acredito que cuidar de si não é luxo, é necessidade. Meu compromisso é entregar resultados que realcem sua singularidade, sem exageros, com muita técnica e segurança.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Especialista em Harmonização",
                "Tecnologia de Ponta",
                "Atendimento Personalizado",
                "Ambiente Acolhedor"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-stone-800 font-medium">
                  <CheckCircle2 className="text-rose-400" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};