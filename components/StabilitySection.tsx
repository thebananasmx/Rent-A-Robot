import React from 'react';
import { SettingsIcon, HeadsetIcon, ChartIcon } from './ui/Icons';

const StabilitySection: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
             <div className="inline-block px-3 py-1 mb-6 rounded-full bg-teal-50 border border-teal-100 text-brand-accent text-xs font-bold tracking-wider uppercase">
              Operaciones Continuas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-brand-dark">
              <SettingsIcon className="w-8 h-8 text-brand-accent" />
              <span>Estabilidad Operativa Garantizada</span>
            </h2>
            <p className="text-brand-muted mb-8 text-lg">
              Con RaaS, el "tiempo de inactividad" se vuelve obsoleto. Asumimos la responsabilidad técnica completa para que usted se enfoque en la producción.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="mt-1 bg-emerald-50 p-3 rounded-xl">
                  <ChartIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Mantenimiento Predictivo con IA</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Nuestros algoritmos monitorean vibraciones y temperatura en tiempo real para predecir fallas antes de que ocurran, programando intervenciones sin detener su línea.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-1 bg-cyan-50 p-3 rounded-xl">
                  <HeadsetIcon className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Soporte Técnico 24/7 Incluido</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Todo incluido en su fee mensual. Sin facturas sorpresa por reparaciones. Si un robot falla y no puede repararse remotamente, lo reemplazamos en menos de 24 horas.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full relative">
            {/* Added image for tranquility/cleanliness */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Ingeniero supervisando robot"
                    className="w-full h-full object-cover"
                />
                 {/* Overlay Uptime Chart */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-6 border-t border-gray-100">
                    <h3 className="text-sm font-bold mb-4 text-center text-brand-dark uppercase tracking-wider">Uptime Promedio de la Flota</h3>
                    <div className="flex justify-center items-end h-32 gap-6">
                        <div className="w-10 bg-gray-200 h-[60%] rounded-t-sm"></div>
                        <div className="w-10 bg-gray-300 h-[75%] rounded-t-sm"></div>
                        <div className="w-10 bg-gray-400 h-[85%] rounded-t-sm"></div>
                        <div className="w-14 bg-gradient-to-t from-teal-600 to-cyan-400 h-[99.9%] rounded-t-md relative group shadow-lg shadow-teal-500/30">
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-brand-accent font-bold text-sm bg-white px-2 py-1 rounded shadow-sm">99.9%</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StabilitySection;