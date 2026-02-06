
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ContactLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}
