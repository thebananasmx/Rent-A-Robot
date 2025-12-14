import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './ui/Icons';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Seguridad', href: '#seguridad' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-brand-secondary/50 shadow-sm py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
           {/* Logo */}
           <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">R</span>
           </div>
           <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-brand-dark'}`}>
             Rent a Robot
           </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${isScrolled ? 'text-brand-muted hover:text-brand-accent' : 'text-brand-muted hover:text-brand-accent'}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto"
            className="px-5 py-2.5 text-sm font-bold bg-brand-accent text-white rounded-full shadow-lg shadow-brand-accent/20 hover:bg-brand-accentHover transition-all transform hover:scale-105"
          >
            Comenzar Ahora
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon className="text-brand-dark" /> : <MenuIcon className="text-brand-dark" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 shadow-2xl animate-fade-in-down">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-lg font-medium text-brand-dark hover:text-brand-accent py-2 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contacto"
              className="mt-4 w-full text-center px-5 py-3 font-bold bg-brand-accent text-white rounded-lg hover:bg-brand-accentHover transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comenzar Ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;