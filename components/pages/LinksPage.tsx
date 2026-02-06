
import React from 'react';

const LinksPage: React.FC = () => {
  const links = [
    { name: 'واتساب', url: 'https://wa.me/201008232789', color: 'bg-[#25D366]' },
    { name: 'فيسبوك', url: 'https://www.facebook.com/share/1bXTxgPN9i/', color: 'bg-[#1877F2]' },
    { name: 'إنستجرام', url: 'https://www.instagram.com/mahmoud_elhendaoy?utm_source=qr&igsh=bGVmdzBlZWZoN3lj', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
  ];

  return (
    <div className="max-w-md mx-auto space-y-12 text-center py-10 transition-colors duration-300">
      {/* Profile Section */}
      <div className="space-y-6">
        <div className="relative w-40 h-40 mx-auto">
          {/* Decorative Glow matching the yellow FOX theme */}
          <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] animate-pulse opacity-20 dark:opacity-30 scale-110 rotate-3"></div>
          <div className="absolute inset-0 bg-indigo-500 rounded-[2rem] opacity-10 dark:opacity-30 scale-105 -rotate-3 blur-xl"></div>
          
          <img 
            src="https://i.ibb.co/d4QzRn2w/610982816-18078144941206338-4111899736964587009-n.jpg" 
            alt="Mahmoud Elfardy Profile" 
            className="relative w-full h-full object-cover object-top rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 dark:ring-slate-700"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase transition-colors">Mahmoud Elfardy</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-slate-200 dark:bg-slate-700"></span>
            <p className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest">Graphic Designer</p>
            <span className="h-px w-8 bg-slate-200 dark:bg-slate-700"></span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 px-6 leading-relaxed font-medium transition-colors">
            اجعل علامتك التجارية تتحدث بصوتٍ مسموع في عالم رقمي مزدحم.
          </p>
        </div>
      </div>

      {/* Links Container */}
      <div className="space-y-4 px-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} text-white p-6 rounded-[2.5rem] flex items-center justify-between shadow-xl shadow-slate-200 dark:shadow-none hover:shadow-indigo-200/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 group`}
          >
            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.851 16.48c-1.341 0-2.43-1.088-2.43-2.43s1.089-2.43 2.43-2.43 2.43 1.088 2.43 2.43-1.089 2.43-2.43 2.43zm3.851-3.851c-1.341 0-2.43-1.088-2.43-2.43s1.089-2.43 2.43-2.43 2.43 1.088 2.43 2.43-1.089 2.43-2.43 2.43zm3.851 3.851c-1.341 0-2.43-1.088-2.43-2.43s1.089-2.43 2.43-2.43 2.43 1.088 2.43 2.43-1.089 2.43-2.43 2.43z" opacity=".2"/>
                  <path fillRule="evenodd" d="M18.651 4.285C17.07 2.704 14.972 1.833 12.729 1.833 8.01 1.833 4.17 5.673 4.17 10.392c0 1.508.393 2.978 1.139 4.272l-1.21 4.419 4.524-1.186a8.553 8.553 0 0 0 4.106 1.047h.004c4.718 0 8.558-3.84 8.558-8.559 0-2.286-.889-4.436-2.47-6.018l-.17-.182zm-5.922 13.048a7.11 7.11 0 0 1-3.628-.994l-.26-.156-2.696.707.72-2.63-.169-.27a7.102 7.102 0 0 1-1.088-3.79c0-3.92 3.197-7.117 7.126-7.117 1.898 0 3.682.74 5.026 2.085a7.091 7.091 0 0 1 2.084 5.034c-.004 3.931-3.201 7.124-7.125 7.124z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-right">
                <p className="font-black text-xl leading-none">{link.name}</p>
              </div>
            </div>
            <div className="opacity-40 group-hover:opacity-100 transition-all transform group-hover:-translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Availability Status */}
      <div className="pt-6">
        <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-slate-100 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          متاح حالياً للعمل الحر
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
