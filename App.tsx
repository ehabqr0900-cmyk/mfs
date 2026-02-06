
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LinksPage from './components/pages/LinksPage';
import WorksPage from './components/pages/WorksPage';
import AIPage from './components/pages/AIPage';

export type Tab = 'links' | 'works' | 'ai';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('links');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference could go here
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'links':
        return <LinksPage />;
      case 'works':
        return <WorksPage />;
      case 'ai':
        return <AIPage />;
      default:
        return <LinksPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-60 transition-colors duration-500"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-60 transition-colors duration-500"></div>
      </div>

      <Navbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-grow container mx-auto px-4 py-6 mb-20 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-8 py-3 flex justify-around items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-colors duration-300">
        <button 
          onClick={() => setActiveTab('links')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === 'links' ? 'text-indigo-600 dark:text-indigo-400 scale-110' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="text-[10px] font-bold">الروابط</span>
        </button>

        <button 
          onClick={() => setActiveTab('works')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === 'works' ? 'text-indigo-600 dark:text-indigo-400 scale-110' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-bold">الأعمال</span>
        </button>

        <button 
          onClick={() => setActiveTab('ai')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === 'ai' ? 'text-indigo-600 dark:text-indigo-400 scale-110' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className={`absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-indigo-500 ${activeTab === 'ai' ? 'animate-ping' : ''}`}></span>
          </div>
          <span className="text-[10px] font-bold">المساعد</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
