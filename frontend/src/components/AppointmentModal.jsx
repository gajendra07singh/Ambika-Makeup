import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91 ',
    email: '',
    service: 'Bridal Makeup'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Ensure it always starts with +91
      if (!value.startsWith('+91 ')) return;
      // Limit to +91 plus 10 digits (total 14 characters)
      if (value.length > 14) return;
      // Allow only numbers after +91
      const digits = value.slice(4);
      if (digits !== '' && !/^\d+$/.test(digits)) return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_URL = isLocal
      ? 'http://localhost:5000/api/appointments'
      : 'https://backend-u9y0.onrender.com/api/appointments';

    console.log(`[FRONTEND] Submitting to: ${API_URL}`);

    // Save to Database and Trigger Email
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          date: new Date().toISOString().split('T')[0],
          message: 'Booked via Modal'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Server Error');
      }

      console.log('Booking confirmed successfully!');
      setIsSubmitted(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', phone: '+91 ', email: '', service: 'Bridal Makeup' });
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    "Bridal Makeup", "Engagement Makeup", "Party Makeup",
    "Skin Care", "Hair Styling", "HD & Airbrush"
  ];

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-[320px] overflow-hidden animate-in fade-in zoom-in duration-300 my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gold transition-all duration-300 z-[10010] p-1"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center py-4 animate-in fade-in zoom-in duration-500">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-lg font-serif text-gray-900 mb-1 italic">Thank You!</h2>
              <p className="text-gray-500 text-[10px]">We'll connect with you soon.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <h2 className="text-xl font-serif text-gray-900 italic">Book Appointment</h2>
                <div className="w-8 h-[1px] bg-gold/30 mx-auto mt-1"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-gold text-gray-800 text-xs"
                />

                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="\+91 [0-9]{10}"
                  title="Please enter a valid 10-digit phone number after +91"
                  placeholder="Phone Number"
                  className="w-full bg-gray-50 border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-gold text-gray-800 text-xs"
                />

                <div className="relative">
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded py-2 pl-3 pr-8 focus:outline-none focus:border-gold text-gray-800 text-xs appearance-none cursor-pointer"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="8" height="5" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address (Optional)"
                  className="w-full bg-gray-50 border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-gold text-gray-800 text-xs"
                />

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-[#111] hover:bg-gold'} text-white font-bold py-2.5 rounded flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-[10px] uppercase tracking-widest`}
                  >
                    {isLoading ? 'Processing...' : 'Confirm Booking'}
                    {!isLoading && <Send size={10} />}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
