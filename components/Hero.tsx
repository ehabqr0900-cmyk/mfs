
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 text-center md:text-right">
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm md:text-base">مصمم جرافيك ومبدع رقمي</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          نحول أفكارك إلى <span className="text-indigo-600">هوية بصرية</span> تخطف الأنظار
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          أهلاً بك! أنا محمود الفردي، متخصص في بناء العلامات التجارية وتصميم تجربة المستخدم. أساعد الشركات والأفراد على التميز في العالم الرقمي من خلال تصاميم فريدة واحترافية.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="https://wa.me/201008232789" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all">
            ابدأ مشروعك
          </a>
          <a href="#portfolio" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all">
            مشاهدة الأعمال
          </a>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-indigo-200 rounded-3xl rotate-6 animate-pulse"></div>
          <img 
            src="https://picsum.photos/seed/elfardy/800/800" 
            alt="Mahmoud Elfardy Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl ring-4 ring-white"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">متاح حالياً</p>
              <p className="text-slate-500 text-xs">للعمل الحر والمشاريع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
