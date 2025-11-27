export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  priceStart?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  treatment: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}