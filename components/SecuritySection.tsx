import React from 'react';
import { LockIcon, ShieldCheckIcon, NetworkIcon } from './ui/Icons';

const SecuritySection: React.FC = () => {
  return (
    <section id="problema" className="py-24 bg-brand-primary relative">
      {/* Subtle pattern or gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-brand-dark">
            <div className="p-2 bg-teal-100 rounded-full">
              <ShieldCheckIcon className="w-8 h-8 text-brand-accent" />
            </div>
            <span>Rompiendo Barreras de Entrada</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            Sabemos que el hardware es caro y el acceso a laboratorios es limitado. Rent A Robot democratiza la ingeniería robótica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Feature 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-teal-900/5 hover:shadow-teal-900/10 transition-shadow group border border-gray-100">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
              <LockIcon className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Adiós al Hardware Costoso</h3>
            <p className="text-brand-muted leading-relaxed">
              Olvídese de invertir miles de dólares en robots, baterías y refacciones. Pague solo por el tiempo de uso. Acceda a equipos de última generación sin riesgo de capital ni mantenimiento.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-teal-900/5 hover:shadow-teal-900/10 transition-shadow group border border-gray-100">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
              <NetworkIcon className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Más allá de la Simulación</h3>
            <p className="text-brand-muted leading-relaxed">
              Los simuladores (Gazebo, Webots) son útiles, pero no representan la fricción, el ruido de los sensores o la física real. Valide sus algoritmos en el mundo real, donde importa, desde cualquier lugar del mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;