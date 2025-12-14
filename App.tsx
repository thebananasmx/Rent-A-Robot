import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SecuritySection from './components/SecuritySection';
import StabilitySection from './components/StabilitySection';
import ModelsSection from './components/ModelsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col text-brand-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SecuritySection />
        <StabilitySection />
        <ModelsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;