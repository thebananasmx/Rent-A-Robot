import React from 'react';
import { SettingsIcon, HeadsetIcon, ChartIcon } from './ui/Icons';

const StabilitySection: React.FC = () => {
  return (
    <section id="funcionalidad" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
             <div className="inline-block px-3 py-1 mb-6 rounded-full bg-teal-50 border border-teal-100 text-brand-accent text-xs font-bold tracking-wider uppercase">
              Flujo de Trabajo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-brand-dark">
              <SettingsIcon className="w-8 h-8 text-brand-accent" />
              <span>Del Código a la Realidad</span>
            </h2>
            <p className="text-brand-muted mb-8 text-lg">
              Eliminamos la barrera física. Usted se concentra en la lógica y los algoritmos; nosotros ponemos el hardware y la infraestructura.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="mt-1 bg-emerald-50 p-3 rounded-xl">
                  <ChartIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">1. Suba su Código</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Acceda a nuestra plataforma, seleccione un robot disponible y despliegue su script (Python, C++, ROS). Todo desde la nube.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-1 bg-cyan-50 p-3 rounded-xl">
                  <SettingsIcon className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">2. Ejecución en Tiempo Real</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    El código se ejecuta instantáneamente en el procesador del robot físico. Sin emuladores. Sin demoras. Hardware real reaccionando a su lógica.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-5">
                <div className="mt-1 bg-teal-50 p-3 rounded-xl">
                  <HeadsetIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">3. Monitoreo y Ajuste</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Observe a través de cámaras de alta velocidad y reciba telemetría de sensores (LiDAR, IMU, Odometría) en su dashboard. Corrija y re-ejecute al instante.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full relative">
            {/* Added image for tranquility/cleanliness */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
                <img 
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000" 
                    alt="Interfaz de código y robot"
                    className="w-full h-full object-cover opacity-80"
                />
                 {/* Overlay Code/Terminal */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm p-6 flex flex-col justify-center font-mono text-xs md:text-sm text-green-400">
                    <div className="mb-2 text-gray-400 border-b border-gray-700 pb-2 flex justify-between">
                        <span>terminal@rentarobot:~/project</span>
                        <span className="text-emerald-500">● Conectado</span>
                    </div>
                    <p className="mb-1"><span className="text-purple-400">import</span> robot_interface <span className="text-purple-400">as</span> ri</p>
                    <p className="mb-1">bot = ri.connect(id=<span className="text-yellow-300">"PUDU-04"</span>)</p>
                    <p className="mb-1">bot.move_forward(speed=<span className="text-blue-400">0.5</span>)</p>
                    <p className="mb-4">></p>
                    <p className="text-white bg-gray-800 p-2 rounded animate-pulse">> Iniciando conexión...</p>
                    <p className="text-white bg-gray-800 p-2 rounded mt-1">> Controladores de motor activos.</p>
                    <p className="text-white bg-gray-800 p-2 rounded mt-1">> Stream OK. Latencia: 21ms</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StabilitySection;