import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 text-center text-sm border-t border-stone-900">
      <div className="container mx-auto px-6">
        <p className="font-serif text-2xl text-stone-300 mb-4">BEMELI CORDEIRO</p>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-rose-300 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-rose-300 transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};