import React from 'react';
import { SettingsIcon, HeadsetIcon, ChartIcon } from './ui/Icons';

const StabilitySection: React.FC = () => {
  return (
    <section id="funcionalidad" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
             <div className="inline-block px-3 py-1 mb-6 rounded-full bg-teal-50 border border-teal-100 text-brand-accent text-xs font-bold tracking-wider uppercase">
              Workflow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-brand-dark">
              <SettingsIcon className="w-8 h-8 text-brand-accent" />
              <span>From Code to Reality</span>
            </h2>
            <p className="text-brand-muted mb-8 text-lg">
              We remove the physical barrier. You focus on logic and algorithms; we provide the hardware and infrastructure.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="mt-1 bg-emerald-50 p-3 rounded-xl">
                  <ChartIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">1. Upload Your Code</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Access our platform, select an available robot, and deploy your script (Python, C++, ROS). All from the cloud.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="mt-1 bg-cyan-50 p-3 rounded-xl">
                  <SettingsIcon className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">2. Real-Time Execution</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Code executes instantly on the physical robot's processor. No emulators. No delays. Real hardware reacting to your logic.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-5">
                <div className="mt-1 bg-teal-50 p-3 rounded-xl">
                  <HeadsetIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">3. Monitor and Adjust</h4>
                  <p className="text-brand-muted text-sm mt-1 leading-relaxed">
                    Observe through high-speed cameras and receive sensor telemetry (LiDAR, IMU, Odometry) on your dashboard. Correct and re-run instantly.
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
                    alt="Code and robot interface"
                    className="w-full h-full object-cover opacity-80"
                />
                 {/* Overlay Code/Terminal */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm p-6 flex flex-col justify-center font-mono text-xs md:text-sm text-green-400">
                    <div className="mb-2 text-gray-400 border-b border-gray-700 pb-2 flex justify-between">
                        <span>terminal@rentarobot:~/project</span>
                        <span className="text-emerald-500">● Connected</span>
                    </div>
                    <p className="mb-1"><span className="text-purple-400">import</span> robot_interface <span className="text-purple-400">as</span> ri</p>
                    <p className="mb-1">bot = ri.connect(id=<span className="text-yellow-300">"PUDU-04"</span>)</p>
                    <p className="mb-1">bot.move_forward(speed=<span className="text-blue-400">0.5</span>)</p>
                    <p className="mb-4">&gt;</p>
                    <p className="text-white bg-gray-800 p-2 rounded animate-pulse">&gt; Initiating connection...</p>
                    <p className="text-white bg-gray-800 p-2 rounded mt-1">&gt; Motor drivers active.</p>
                    <p className="text-white bg-gray-800 p-2 rounded mt-1">&gt; Stream OK. Latency: 21ms</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StabilitySection;