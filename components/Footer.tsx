import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary border-t border-teal-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-brand-dark">Rent a Robot</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Democratizing industrial automation through the Robot as a Service model. Clean, secure, and scalable solutions.
            </p>
          </div>

          <div>
            <h4 className="text-brand-dark font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-dark font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-dark font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>soporte@rentarobot.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex gap-4 mt-6">
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all cursor-pointer shadow-sm text-brand-muted font-bold">In</div>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all cursor-pointer shadow-sm text-brand-muted font-bold">Tw</div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-teal-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted">
          <p>&copy; {new Date().getFullYear()} Rent a Robot Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">Designed with a Mobile-First & Security-First approach.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;