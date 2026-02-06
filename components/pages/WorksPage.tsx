
import React from 'react';
import Portfolio from '../Portfolio';

const WorksPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">أعمالي المختارة</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors">مجموعة من أفضل التصاميم التي قمت بتنفيذها</p>
      </div>
      <Portfolio />
    </div>
  );
};

export default WorksPage;
