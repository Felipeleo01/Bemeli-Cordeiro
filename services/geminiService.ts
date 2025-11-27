import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure your API key is restricted or proxied.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é a "Bemeli AI", uma assistente virtual especialista em estética avançada e autocuidados, treinada pela Dra. Bemeli Cordeiro.
Seu tom de voz é: Sofisticado, acolhedor, empático, profissional e motivador.
Seu objetivo: Tirar dúvidas sobre procedimentos estéticos, sugerir rotinas básicas de skincare e elevar a autoestima do usuário.

Diretrizes:
1. Sempre responda em Português do Brasil.
2. Seja concisa, mas elegante. Use emojis com moderação (✨, 🤍, 🌸).
3. Nunca faça diagnósticos médicos. Para problemas sérios, recomende agendar uma consulta presencial com a Bemeli.
4. Explique procedimentos como Botox, Preenchimento, Bioestimuladores e Peelings de forma simples e desmistificada.
5. Finalize as respostas convidando para uma avaliação.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Creativity balanced with accuracy
      },
    });

    if (response.text) {
      return response.text;
    }
    
    return "Desculpe, não consegui processar sua resposta no momento. ✨";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    throw new Error("Serviço temporariamente indisponível.");
  }
};