import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, GlobeIcon } from './ui/Icons';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  // Safe language access using the hook's instance
  const currentLang = i18n.language || 'es';

  const toggleLanguage = () => {
    // Determine new language based on current prefix
    const newLang = currentLang.startsWith('es') ? 'en' : 'es';
    // Use the hook's instance to trigger a re-render
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.services'), href: '#servicios' },
    { label: t('nav.security'), href: '#problema' },
    { label: t('nav.features'), href: '#funcionalidad' },
    { label: t('nav.contact'), href: '#contacto' },
  ];

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
              key={item.href} 
              href={item.href}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${isScrolled ? 'text-brand-muted hover:text-brand-accent' : 'text-brand-muted hover:text-brand-accent'}`}
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all hover:shadow-sm ${
              isScrolled 
              ? 'border-gray-200 hover:border-brand-accent text-brand-dark bg-white' 
              : 'border-gray-300 hover:border-brand-accent text-brand-dark bg-white/50 backdrop-blur-sm'
            }`}
            title="Switch Language"
          >
             <GlobeIcon className="w-4 h-4" />
             <span className="text-xs font-bold uppercase tracking-wide">
               {currentLang.substring(0,2)}
             </span>
          </button>

          <a 
            href="#contacto"
            className="px-5 py-2.5 text-sm font-bold bg-brand-accent text-white rounded-full shadow-lg shadow-brand-accent/20 hover:bg-brand-accentHover transition-all transform hover:scale-105"
          >
            {t('nav.start')}
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-brand-dark shadow-sm"
          >
             <GlobeIcon className="w-4 h-4" />
             <span className="text-xs font-bold uppercase">
               {currentLang.substring(0,2)}
             </span>
          </button>

          <button 
            className="text-brand-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon className="text-brand-dark" /> : <MenuIcon className="text-brand-dark" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 shadow-2xl animate-fade-in-down">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.href} 
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
              {t('nav.start')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;