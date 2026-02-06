
import React from 'react';
import Chat from '../Chat';

const AIPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-14rem)] flex flex-col gap-8 py-4">
      <div className="text-center space-y-2 shrink-0">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">مساعد محمود الذكي</h2>
      </div>
      
      <div className="flex-grow shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] rounded-[3rem] overflow-hidden border border-white dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md transition-all">
        <Chat />
      </div>
    </div>
  );
};

export default AIPage;
