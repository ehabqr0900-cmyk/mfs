
import React from 'react';
import { PortfolioItem } from '../types';

const ITEMS: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Creative Design', 
    category: 'Social Media', 
    imageUrl: 'https://i.ibb.co/8n4nqV6d/1.jpg' 
  },
  { 
    id: '2', 
    title: 'Visual Identity', 
    category: 'Branding', 
    imageUrl: 'https://i.ibb.co/LdJ2gqtL/2.jpg' 
  },
  { 
    id: '3', 
    title: 'Digital Art', 
    category: 'Art Direction', 
    imageUrl: 'https://i.ibb.co/9m9dcR9c/3.jpg' 
  },
  { 
    id: '4', 
    title: 'Modern Poster', 
    category: 'Print Design', 
    imageUrl: 'https://i.ibb.co/23XmnZ8C/4.jpg' 
  },
  { 
    id: '5', 
    title: 'Brand Strategy', 
    category: 'Marketing', 
    imageUrl: 'https://i.ibb.co/NdJZNpcF/5.jpg' 
  },
  { 
    id: '6', 
    title: 'Typography', 
    category: 'Design', 
    imageUrl: 'https://i.ibb.co/60wjSBfd/6.jpg' 
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {ITEMS.map((item) => (
        <div key={item.id} className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-700 transition-all duration-700 hover:-translate-y-3 hover:shadow-indigo-200/40">
          <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {item.category}
              </span>
              <h3 className="text-white font-black text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
