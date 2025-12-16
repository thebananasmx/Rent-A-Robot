import React from 'react';
import { useTranslation } from 'react-i18next';

const ModelsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-primary/30 border-t border-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
           <span className="text-brand-accent font-bold tracking-wider uppercase text-xs mb-2 block">{t('models.badge')}</span>
           <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
             {t('models.title')}
           </h2>
           <p className="text-brand-muted max-w-2xl mx-auto text-lg">
             {t('models.description')}
           </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-teal-100/50 rounded-full blur-3xl -z-10"></div>
          
          <img 
            src="https://res.cloudinary.com/dg4wbuppq/image/upload/v1765751427/Pudu-Robotics_dvn5ml.jpg" 
            alt="Flota de robots Pudu Robotics adaptables a su marca" 
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-xl"
          />
          
          {/* Color swatches simulation */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
             <div className="text-center group cursor-default">
                <div className="w-6 h-6 rounded-full bg-white border border-gray-200 shadow-sm mx-auto mb-3 group-hover:scale-125 transition-transform ring-2 ring-transparent group-hover:ring-gray-100"></div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">{t('models.colors.white')}</span>
             </div>
             <div className="text-center group cursor-default">
                <div className="w-6 h-6 rounded-full bg-gray-800 shadow-sm mx-auto mb-3 group-hover:scale-125 transition-transform ring-2 ring-transparent group-hover:ring-gray-200"></div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">{t('models.colors.black')}</span>
             </div>
             <div className="text-center group cursor-default">
                <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-sm mx-auto mb-3 group-hover:scale-125 transition-transform ring-2 ring-transparent group-hover:ring-yellow-100"></div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">{t('models.colors.yellow')}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;