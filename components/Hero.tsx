import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/250/1920/1080" 
          alt="Aesthetic Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 border border-stone-300 rounded-full bg-white/50 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-600">Pós-Graduada em Estética Avançada</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-stone-900">
            Revele a sua <br/>
            <span className="italic font-light text-stone-600">melhor versão</span>
          </h1>
          
          <p className="font-sans text-stone-600 text-lg md:text-xl leading-relaxed max-w-md border-l-2 border-rose-300 pl-6">
            Comprometida em elevar sua autoestima através de tratamentos sofisticados e personalizados. Viciada em autocuidados, apaixonada por você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact">
              <Button>
                Agendar Avaliação
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline">
                Conhecer Tratamentos
              </Button>
            </a>
          </div>
        </div>

        {/* Decorative Elements (Desktop) */}
        <div className="hidden md:block relative h-[600px] w-full">
            <div className="absolute top-10 right-10 w-4/5 h-4/5 bg-[url('https://picsum.photos/id/331/800/1000')] bg-cover bg-center rounded-t-[10rem] rounded-b-xl shadow-2xl z-20 hover:scale-[1.02] transition-transform duration-700"></div>
            <div className="absolute top-20 right-0 w-4/5 h-4/5 border border-stone-400 rounded-t-[10rem] rounded-b-xl z-10 opacity-60"></div>
            <div className="absolute bottom-20 left-10 bg-white p-6 rounded-xl shadow-xl z-30 max-w-xs backdrop-blur-md bg-white/80">
                <p className="font-serif text-xl italic text-stone-800">"A beleza começa no momento em que você decide ser você mesma."</p>
                <p className="text-right text-xs mt-2 font-bold uppercase tracking-wider text-rose-400">— Bemeli Cordeiro</p>
            </div>
        </div>
      </div>
    </section>
  );
};