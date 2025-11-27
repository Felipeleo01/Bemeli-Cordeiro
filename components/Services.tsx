import React from 'react';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: '1',
    title: 'Harmonização Facial',
    description: 'Equilíbrio e simetria para realçar seus traços naturais com preenchedores de alta qualidade.',
    image: 'https://picsum.photos/id/342/600/400',
  },
  {
    id: '2',
    title: 'Toxina Botulínica',
    description: 'Suavização de rugas e linhas de expressão, prevenindo o envelhecimento precoce.',
    image: 'https://picsum.photos/id/325/600/400',
  },
  {
    id: '3',
    title: 'Bioestimuladores de Colágeno',
    description: 'Recupere a firmeza e a textura da pele estimulando seu próprio colágeno.',
    image: 'https://picsum.photos/id/129/600/400',
  },
  {
    id: '4',
    title: 'Skinbooster',
    description: 'Hidratação profunda injetável para um "glow" imediato e duradouro.',
    image: 'https://picsum.photos/id/21/600/400',
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-2 block">Procedimentos Exclusivos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Menu de Tratamentos</h2>
          <p className="text-stone-600 font-sans">
            Cada protocolo é desenhado exclusivamente para a necessidade da sua pele, unindo ciência e arte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <div key={service.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-serif text-2xl mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};