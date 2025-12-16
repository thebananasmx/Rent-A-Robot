import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="servicios" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      {/* Background gradients - Soft Blue/Teal */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-teal-50 border border-teal-100 text-brand-accent text-xs font-bold tracking-wider uppercase">
              Cloud Robotics Laboratory
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-brand-dark">
              Program <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Real Physical Robots</span> <br/>
              Remotely.
            </h1>
            <p className="text-lg lg:text-xl text-brand-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Your code. Our robots. Instant execution.</strong><br/>
              Rent A Robot allows you to program, test, and monitor real hardware in real-time from your browser, as if the lab were on your computer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contacto"
                className="px-8 py-4 bg-brand-accent text-white text-base font-bold rounded-full shadow-xl shadow-teal-500/20 hover:bg-brand-accentHover transition-all hover:-translate-y-1"
              >
                Start Programming
              </a>
              <a 
                href="#funcionalidad"
                className="px-8 py-4 bg-white border border-gray-200 text-brand-dark text-base font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              >
                View Available Robots
              </a>
            </div>
          </div>

          {/* Visual Element - Robot Photo */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group ring-1 ring-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 to-transparent z-10 pointer-events-none"></div>
              
              <img 
                src="https://www.servibot.mx/web/image/product.template/37650/image_1024?unique=447a1ae" 
                alt="Industrial robot in remote lab" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Floating Key Stats - Glassmorphism Light */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-lg">
                <p className="text-brand-accent text-xs font-bold uppercase mb-1">Latency</p>
                <p className="text-brand-dark font-mono text-lg font-bold">24ms (Real-time)</p>
              </div>

               <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-lg">
                <p className="text-brand-muted text-xs font-bold uppercase mb-1">Connection</p>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                   <p className="text-brand-dark font-mono text-sm font-semibold">Live Stream</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;