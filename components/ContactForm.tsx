import React, { useState } from 'react';
import { saveLeadToFirebase } from '../services/firebase';
import { InterestType, Lead } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    interest: InterestType.Development
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const lead: Lead = {
      ...formData,
      timestamp: Date.now()
    };

    try {
      const response = await saveLeadToFirebase(lead);
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
        setFormData({ companyName: '', email: '', interest: InterestType.Development });
      } else {
        setStatus('error');
        setMessage(response.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <section id="contacto" className="py-24 relative bg-gradient-to-b from-brand-primary to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-teal-900/10 p-8 md:p-14">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Start Programming Now</h2>
            <p className="text-brand-muted text-lg">Request API access, SDK documentation, and reserve your first remote lab hours.</p>
          </div>

          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-8 rounded-2xl text-center">
              <p className="text-2xl font-bold mb-2">✓ Request Received</p>
              <p className="text-emerald-600">{message}</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2 bg-white text-emerald-600 font-semibold rounded-full border border-emerald-100 hover:bg-emerald-50 transition-colors"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-brand-dark mb-2">
                    Name / Organization
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder-gray-400"
                    placeholder="Ex. Independent Developer / University X"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder-gray-400"
                    placeholder="user@domain.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-brand-dark mb-2">
                  Primary Use Case
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 appearance-none transition-all cursor-pointer"
                  >
                    <option value={InterestType.Development}>Development & Prototyping</option>
                    <option value={InterestType.Research}>Research (R&D)</option>
                    <option value={InterestType.Education}>Education / Academic</option>
                    <option value={InterestType.Enterprise}>Enterprise / Corporate Scale</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {status === 'error' && (
                 <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm">
                   {message}
                 </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
                    status === 'submitting'
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-brand-accent text-white hover:bg-brand-accentHover hover:shadow-teal-500/30 hover:-translate-y-1'
                  }`}
                >
                  {status === 'submitting' ? 'Processing...' : 'Request Platform Access'}
                </button>
              </div>
              
              <p className="text-xs text-center text-brand-muted mt-4">
                You will receive access credentials and SDK documentation after verification.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;