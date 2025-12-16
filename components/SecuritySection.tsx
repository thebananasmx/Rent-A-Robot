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
            <span>Breaking Entry Barriers</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            We know hardware is expensive and lab access is limited. Rent A Robot democratizes robotics engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Feature 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-teal-900/5 hover:shadow-teal-900/10 transition-shadow group border border-gray-100">
            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
              <LockIcon className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Goodbye Expensive Hardware</h3>
            <p className="text-brand-muted leading-relaxed">
              Forget about investing thousands of dollars in robots, batteries, and spare parts. Pay only for usage time. Access state-of-the-art equipment without capital risk or maintenance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-teal-900/5 hover:shadow-teal-900/10 transition-shadow group border border-gray-100">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
              <NetworkIcon className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Beyond Simulation</h3>
            <p className="text-brand-muted leading-relaxed">
              Simulators (Gazebo, Webots) are useful, but they don't represent friction, sensor noise, or real physics. Validate your algorithms in the real world, where it matters, from anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;