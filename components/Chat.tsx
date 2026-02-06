
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { chatWithGemini } from '../services/geminiService';

interface ChatProps {
  onClose?: () => void;
}

const Chat: React.FC<ChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome! I am Mahmoud Elfardy\'s AI Assistant. How can I help you today with your design inquiries?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithGemini(input, messages);
    
    const assistantMessage: Message = {
      role: 'assistant',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 h-full flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="bg-indigo-600 dark:bg-indigo-900 p-5 text-white flex items-center justify-between shrink-0 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Mahmoud AI</h3>
            <p className="text-xs text-indigo-100 opacity-80 flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Online to help you
            </p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50 dark:bg-slate-950/50 scroll-smooth transition-colors"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end animate-in slide-in-from-right-2'}`}
          >
            <div 
              className={`max-w-[85%] p-4 rounded-3xl text-sm shadow-sm leading-relaxed transition-colors ${
                msg.role === 'user' 
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white rounded-br-none shadow-indigo-100 dark:shadow-none' 
                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-100 dark:border-slate-700'
              }`}
            >
              {msg.content}
              <div className={`text-[10px] mt-2 opacity-50 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end animate-pulse">
            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-3xl rounded-bl-none shadow-sm flex gap-1.5 transition-colors">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 transition-colors">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="اكتب استفسارك هنا..."
          className="flex-grow bg-slate-100 dark:bg-slate-800 dark:text-white px-5 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-transparent focus:border-indigo-200 dark:focus:border-indigo-900 dark:placeholder-slate-500"
        />
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className={`w-12 h-12 rounded-2xl text-white flex items-center justify-center transition-all ${
            !input.trim() || isLoading ? 'bg-slate-300 dark:bg-slate-700' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 dark:shadow-none active:scale-90'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
