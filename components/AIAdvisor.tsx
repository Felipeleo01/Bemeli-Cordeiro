import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

export const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a IA da Bemeli. Como posso ajudar a elevar sua autoestima hoje? Tem dúvidas sobre qual procedimento é ideal para você?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, tive um problema técnico. Tente novamente mais tarde.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-advisor" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-stone-50 rounded-3xl shadow-2xl overflow-hidden border border-stone-100 flex flex-col md:flex-row h-[600px]">
          
          {/* Sidebar Info */}
          <div className="bg-stone-900 text-white p-8 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Sparkles size={120} />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-rose-400" />
                <h3 className="font-serif text-2xl">Bemeli AI</h3>
              </div>
              <p className="text-stone-300 font-light mb-4">
                Tire suas dúvidas sobre cuidados com a pele e procedimentos estéticos instantaneamente com nossa inteligência artificial.
              </p>
              <div className="text-xs text-stone-500 uppercase tracking-widest mt-8">Exemplos</div>
              <ul className="mt-4 space-y-3 text-sm text-stone-300">
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setInput("O que é Skinbooster?")}>• O que é Skinbooster?</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setInput("Botox dói?")}>• Botox dói?</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setInput("Rotina básica de skincare")}>• Rotina de skincare</li>
              </ul>
            </div>

            <div className="text-xs text-stone-600 mt-auto pt-8">
              * A IA fornece informações educativas e não substitui uma avaliação profissional.
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-stone-200' : 'bg-rose-100'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-stone-600" /> : <Bot size={16} className="text-rose-500" />}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-stone-100 text-stone-800 rounded-tr-none' 
                      : 'bg-rose-50 text-stone-800 rounded-tl-none border border-rose-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <Bot size={16} className="text-rose-500" />
                  </div>
                  <div className="bg-rose-50 p-4 rounded-2xl rounded-tl-none border border-rose-100 flex items-center gap-2 text-stone-500 text-sm">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-stone-100 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua dúvida aqui..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-stone-900 text-white rounded-full hover:bg-rose-400 disabled:opacity-50 disabled:hover:bg-stone-900 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};